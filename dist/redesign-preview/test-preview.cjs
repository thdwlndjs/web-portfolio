const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function node() {
  return {
    innerHTML: '', textContent: '', dataset: {}, listeners: {},
    addEventListener(type, handler) { this.listeners[type] = handler; },
    classList: { toggle() {} },
    getAttribute() { return '#featured'; },
  };
}

const list = node();
const frame = node();
const previewTitle = node();
const previewDescription = node();
const navLinks = [node(), node(), node()];
const targets = { '#featured': node(), '#additional': node(), '#notes': node() };
const document = {
  querySelector(selector) { return { '#project-list': list, '#preview-frame': frame, '#preview-title': previewTitle, '#preview-description': previewDescription }[selector] || targets[selector] || null; },
  querySelectorAll() { return navLinks; },
};
class Observer { observe() {} }
const context = { document, window: { matchMedia: () => ({ matches: true }) }, IntersectionObserver: Observer };
vm.runInNewContext(fs.readFileSync('app.js', 'utf8'), context);

assert.match(list.innerHTML, /TacitFlow/);
assert.match(list.innerHTML, /ASC/);
assert.match(frame.innerHTML, /tacitflow-gaps-feature\.png/);
list.listeners.click({ target: { closest: () => ({ dataset: { index: '1' } }) } });
assert.match(previewTitle.textContent, /InterviewIQ/);
assert.match(list.innerHTML, /class="mobile-preview is-open" data-mobile-preview="1"/);
list.listeners.click({ target: { closest: () => ({ dataset: { index: '1' } }) } });
assert.equal(previewTitle.textContent, '');
assert.match(frame.innerHTML, /프로젝트를 선택하세요/);
console.log('Preview interaction test: OK');
