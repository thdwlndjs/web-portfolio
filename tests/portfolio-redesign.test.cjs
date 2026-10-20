const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function element() { return { innerHTML:'', listeners:{}, classList:{toggle(){}}, addEventListener(type, fn){this.listeners[type]=fn}, getAttribute(){return '#projects'} }; }
const list=element(), preview=element(), nav=[element(),element(),element()];
const targets={'#projects':element(),'#experience':element(),'#education':element()};
const document={querySelector:s=>({'#project-list':list,'#preview-image':preview}[s]||targets[s]),querySelectorAll:()=>nav};
class Observer { observe(){} }
vm.runInNewContext(fs.readFileSync('dist/index_files/app.js','utf8'),{document,matchMedia:()=>({matches:true}),IntersectionObserver:Observer});
assert.match(list.innerHTML,/TacitFlow/);
assert.match(list.innerHTML,/ASC/);
assert.match(preview.innerHTML,/tacitflow-gaps-feature\.png/);
list.listeners.click({target:{closest:()=>({dataset:{index:'1'}})}});
assert.match(list.innerHTML,/mobile-panel open/);
assert.match(preview.innerHTML,/interviewiq-local\.png/);
list.listeners.click({target:{closest:()=>({dataset:{index:'1'}})}});
assert.match(preview.innerHTML,/프로젝트를 선택하세요/);
console.log('Portfolio interaction test: OK');
