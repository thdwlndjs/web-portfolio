const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function element(href = '#projects') {
  const classes = new Set();
  return {
    innerHTML: '',
    listeners: {},
    classList: {
      toggle(name, force) {
        if (force === undefined ? !classes.has(name) : force) classes.add(name);
        else classes.delete(name);
      },
      contains(name) { return classes.has(name); }
    },
    addEventListener(type, fn) { this.listeners[type] = fn; },
    getAttribute() { return href; }
  };
}

const list = element();
const preview = element();
const featured = element();
const nav = [element('#projects'), element('#experience'), element('#education')];
const sectionTops = { projects: 0, more: 1000, experience: 1600, education: 2400 };
const section = id => Object.assign(element(), {
  id,
  getBoundingClientRect: () => ({ top: sectionTops[id] })
});
const targets = {
  '#projects': section('projects'),
  '#more': section('more'),
  '#experience': section('experience'),
  '#education': section('education')
};
const windowListeners = {};
const window = {
  innerHeight: 800,
  scrollY: 0,
  addEventListener(type, fn) { windowListeners[type] = fn; }
};
const document = {
  documentElement: { scrollHeight: 3200 },
  querySelector(selector) {
    return { '#project-list': list, '#preview-image': preview, '#featured-projects': featured }[selector] || targets[selector];
  },
  querySelectorAll() { return nav; }
};
class Observer { observe() {} }
let mobile = true;

const context = {
  document,
  window,
  matchMedia: () => ({ matches: mobile }),
  IntersectionObserver: Observer
};
vm.runInNewContext(`${fs.readFileSync('dist/app.js', 'utf8')}\nglobalThis.__allProjects = projects;`, context);
const allProjects = context.__allProjects;

assert.doesNotMatch(list.innerHTML, /aria-expanded="true"/, 'no project should start selected');
assert.ok(nav[0].classList.contains('active'), 'Projects should be active at the top');
assert.equal(typeof windowListeners.scroll, 'function', 'navigation should update when scrolling');
sectionTops.projects = -1600;
sectionTops.more = -700;
sectionTops.experience = 100;
sectionTops.education = 1000;
windowListeners.scroll();
assert.ok(nav[1].classList.contains('active'), 'Experience should become active as its section reaches the reading line');
sectionTops.experience = -700;
sectionTops.education = 100;
windowListeners.scroll();
assert.ok(nav[2].classList.contains('active'), 'Education & Awards should become active as its section reaches the reading line');
sectionTops.projects = -2500;
sectionTops.more = -1700;
sectionTops.experience = -700;
sectionTops.education = 100;
window.scrollY = 2400;
windowListeners.scroll();
assert.ok(nav[2].classList.contains('active'), 'Education & Awards should remain active at the document bottom');

const html = fs.readFileSync('dist/index.html', 'utf8');
assert.match(html, /2022–2025/);
assert.match(html, /싸이웰시스템 2회 · 새올정보기술 1회/);
assert.match(html, /2026 · LG AX School/);
assert.match(html, /프로젝트 우수상 2회/);
assert.equal((html.match(/<li><strong>20/g) || []).length, 2);

assert.match(featured.innerHTML, /Milestone \(News Bias\)/);
assert.match(featured.innerHTML, /CLOS:IT \(Smart Wardrobe\)/);
assert.ok(allProjects.every(project => typeof project.visible === 'boolean'));
for (const name of ['ASC', 'CoachCU', 'Personalized Travel Curator', 'Knowledge Graph', 'RecycleCenter', '개발자 전투력 측정기', 'Dragon Slayer', 'Teams Echo Bot', 'ShortsFactory', '검토 에이전트', 'KITE', 'OurDays']) {
  assert.ok(allProjects.some(project => project.name === name && project.visible === false), `${name} should remain in the catalog and be hidden`);
}
assert.ok(allProjects.some(project => project.previousName === 'News Bias Explorer'));
assert.ok(allProjects.some(project => project.previousName === 'Smart Wardrobe Agent'));
for (const name of ['Deal Scale', 'Teams PM Bot', 'LG_AX', 'InterviewIQ', 'TacitFlow', 'WantWear']) {
  assert.ok(allProjects.some(project => project.name === name), `${name} should remain in the catalog`);
}
for (const project of allProjects.filter(project => project.visible && !project.featured)) {
  assert.match(list.innerHTML, new RegExp(project.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
}
for (const excluded of ['ASC', 'CoachCU', 'Personalized Travel Curator', 'Knowledge Graph', 'RecycleCenter', '개발자 전투력 측정기', 'Dragon Slayer']) {
  assert.doesNotMatch(featured.innerHTML + list.innerHTML, new RegExp(excluded));
}
assert.match(featured.innerHTML, /news-bias-feature\.png/);
assert.match(featured.innerHTML, /smart-wardrobe-web\.png/);
assert.match(list.innerHTML, /teams-echo-bot-start-menu-focused\.png/);
assert.match(featured.innerHTML, /github\.com\/thdwlndjs\/news-bias-analyzer/);
assert.match(featured.innerHTML, /github\.com\/thdwlndjs\/LG-CLOS-IT/);
assert.match(list.innerHTML, /github\.com\/thdwlndjs\/InterviewIQ/);
assert.match(list.innerHTML, /github\.com\/thdwlndjs\/Tacitflow/);
assert.match(list.innerHTML, /github\.com\/thdwlndjs\/wantwear/);

const additionalProjects = allProjects.filter(project => project.visible && !project.featured);
const interviewIndex = additionalProjects.findIndex(project => project.name === 'InterviewIQ');
const teamsIndex = additionalProjects.findIndex(project => project.name === 'Teams PM Bot');
const tacitIndex = additionalProjects.findIndex(project => project.name === 'TacitFlow');
list.listeners.click({ target: { closest: () => ({ dataset: { index: String(interviewIndex) } }) } });
assert.match(list.innerHTML, /aria-expanded="true"/);
assert.match(preview.innerHTML, /interviewiq-local\.png/);
list.listeners.click({ target: { closest: () => ({ dataset: { index: String(interviewIndex) } }) } });
assert.match(preview.innerHTML, /프로젝트를 선택하세요/);
mobile = false;
list.listeners.mouseover({ target: { closest: () => ({ dataset: { index: String(teamsIndex) } }) } });
assert.match(preview.innerHTML, /teams-echo-bot-start-menu-focused\.png/);
list.listeners.focusin({ target: { closest: () => ({ dataset: { index: String(tacitIndex) } }) } });
assert.match(preview.innerHTML, /tacitflow-gaps-feature\.png/);

console.log('Portfolio content and interaction checks: OK');
