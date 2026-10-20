const menu = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('.sidebar');
const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#site-search');
const searchResult = document.querySelector('#search-result');
const searchable = [
  ['News Bias Explorer', '검색 전략 다관점 기사 Elasticsearch 임베딩 성능 최적화', '#news-bias'],
  ['Smart Wardrobe Agent', '디지털 트윈 에이전트 의류 상태 FastAPI Celery', '#smart-wardrobe'],
  ['TacitFlow', '암묵지 업무 지식 추출 검증', '#tacitflow'],
  ['InterviewIQ', '멀티모달 모의면접 음성 영상 파이프라인', '#interviewiq'],
  ['CoachCU', 'Windows PySide6 SQLite Groq', '#archive'],
  ['LG_AX', '리서치 에이전트 동적 탐색', '#archive'],
  ['WantWear', 'Spring Boot 인증 상태 관리', '#archive'],
  ['Knowledge Graph', 'FastAPI Neo4j 그래프', '#archive'],
  ['ASC', 'AI 워크플로 LangGraph', '#archive'],
];

menu.addEventListener('click', () => {
  const open = sidebar.classList.toggle('visible');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const group = toggle.closest('.nav-group');
    const open = group.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
});

document.querySelector('#search-button').addEventListener('click', () => searchDialog.showModal());
document.querySelector('#theme-toggle').addEventListener('click', () => document.documentElement.classList.toggle('dim'));
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const match = searchable.find(([name, terms]) => `${name} ${terms}`.toLocaleLowerCase().includes(query));
  searchResult.textContent = !query ? '프로젝트 이름 또는 기술 키워드를 입력하세요.' : match ? `${match[0]}로 이동하려면 Enter를 누르세요.` : '일치하는 프로젝트가 없습니다.';
  searchInput.dataset.target = match?.[2] || '';
});
searchInput.addEventListener('keydown', event => {
  if (event.key !== 'Enter' || !searchInput.dataset.target) return;
  event.preventDefault();
  searchDialog.close();
  document.querySelector(searchInput.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
});
