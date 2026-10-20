const projects = [
  ['TacitFlow','업무 기록과 매뉴얼 사이의 설명되지 않는 차이를 찾아 질문하고, 답변을 검토해 지식으로 정리하는 프로젝트입니다.','tacitflow-gaps-feature.png','TacitFlow 실제 화면 캡처'],
  ['InterviewIQ','면접 답변의 음성과 영상 데이터를 답변 단위로 연결하고, 음성 전사와 다음 질문 생성 흐름을 제공하는 모의면접 프로젝트입니다.','interviewiq-local.png','InterviewIQ 실제 화면 캡처'],
  ['LG_AX','제품 사용 경험에 대한 연구 질문을 바탕으로 후기 등 자료를 수집하고, 사람의 검토와 선택에 따라 추가 탐색을 진행하는 프로젝트입니다.','lg-ax-demo-t60.png','LG_AX 실제 화면 캡처'],
  ['WantWear','관심 패션 상품을 저장하고 품절 상태의 변화를 확인하는 웹 서비스 프로젝트입니다.'],
  ['CoachCU','작업 의도와 계획 시간을 설정하고, 세션 중 활성 앱과 유휴 시간을 기록하는 Windows용 개인 작업 코치입니다.'],
  ['Personalized Travel Curator','이미지와 태그, 사용자 선호도를 활용해 여행지를 추천하는 프로젝트입니다.'],
  ['Knowledge Graph','FastAPI와 Neo4j를 연결해 논문 정보를 생성하고 조회하는 프로젝트입니다.'],
  ['RecycleCenter','재활용과 아이템 분류를 소재로 한 Unity 팀 게임 프로젝트입니다.'],
  ['ASC','업무 의뢰를 접수하고 실행·검토·승인으로 연결하는 AI 워크플로 프로젝트입니다.','asc-b2c-web.png','ASC 실제 화면 캡처'],
  ['개발자 전투력 측정기','개발 역량을 전투력으로 표현해 전투 화면에서 결과를 보여 주는 인터랙티브 프로젝트입니다.','dragonslayer.png','개발자 전투력 측정기 실제 화면 캡처'],
];
const list = document.querySelector('#project-list');
const preview = document.querySelector('#preview-image');
let selected = 0;
const markup = project => project[2] ? `<img src="./index_files/${project[2]}" alt="${project[3]}">` : '<div class="empty">실제 화면 캡처 준비 중</div>';
function render() {
  list.innerHTML = projects.map((project,index) => `<article class="project"><button type="button" data-index="${index}" aria-expanded="${selected===index}"><span class="number">${String(index+3).padStart(2,'0')}</span><strong>${project[0]}</strong><span class="arrow">↗</span><small>${project[1]}</small></button><div class="mobile-panel${selected===index?' open':''}">${markup(project)}</div></article>`).join('');
  preview.innerHTML = selected < 0 ? '<div class="empty">프로젝트를 선택하세요</div>' : markup(projects[selected]);
}
function choose(index) {
  selected = selected === index && matchMedia('(max-width:899px)').matches ? -1 : index;
  render();
}
list.addEventListener('click', event => {
  const button = event.target.closest('[data-index]');
  if (button) choose(Number(button.dataset.index));
});
const links = [...document.querySelectorAll('.nav a')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if (visible) links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${visible.target.id}`));
},{rootMargin:'-20% 0px -60% 0px',threshold:[.1,.5]});
links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean).forEach(section=>observer.observe(section));
render();
