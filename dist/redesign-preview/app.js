const projects = [
  { name: 'TacitFlow', role: '핵심 보조 프로젝트', description: '업무 기록과 매뉴얼 사이의 설명되지 않는 차이를 찾아 질문하고, 답변을 검토해 지식으로 정리하는 프로젝트입니다.', image: '../index_files/tacitflow-gaps-feature.png', alt: 'TacitFlow 실제 화면 캡처' },
  { name: 'InterviewIQ', role: '핵심 보조 프로젝트', description: '면접 답변의 음성과 영상 데이터를 답변 단위로 연결하고, 음성 전사와 다음 질문 생성 흐름을 제공하는 모의면접 프로젝트입니다.', image: '../index_files/interviewiq-local.png', alt: 'InterviewIQ 실제 화면 캡처' },
  { name: 'LG_AX', role: '추가 프로젝트', description: '제품 사용 경험에 대한 연구 질문을 바탕으로 후기 등 자료를 수집하고, 사람의 검토와 선택에 따라 추가 탐색을 진행하는 프로젝트입니다.', image: '../index_files/lg-ax-demo-t60.png', alt: 'LG_AX 실제 화면 캡처' },
  { name: 'WantWear', role: '추가 프로젝트', description: '관심 패션 상품을 저장하고 품절 상태의 변화를 확인하는 웹 서비스 프로젝트입니다.' },
  { name: 'CoachCU', role: '추가 프로젝트', description: '작업 의도와 계획 시간을 설정하고, 세션 중 활성 앱과 유휴 시간을 기록하는 Windows용 개인 작업 코치입니다.' },
  { name: 'Personalized Travel Curator', role: '추가 프로젝트', description: '이미지와 태그, 사용자 선호도를 활용해 여행지를 추천하는 프로젝트입니다.' },
  { name: 'Knowledge Graph', role: '추가 프로젝트', description: 'FastAPI와 Neo4j를 연결해 논문 정보를 생성하고 조회하는 프로젝트입니다.' },
  { name: 'RecycleCenter', role: '추가 프로젝트', description: '재활용과 아이템 분류를 소재로 한 Unity 팀 게임 프로젝트입니다.' },
  { name: 'ASC', role: '추가 프로젝트', description: '업무 의뢰를 접수하고 실행·검토·승인으로 연결하는 AI 워크플로 프로젝트입니다.', image: '../index_files/asc-b2c-web.png', alt: 'ASC 실제 화면 캡처' },
];

const list = document.querySelector('#project-list');
const frame = document.querySelector('#preview-frame');
const previewTitle = document.querySelector('#preview-title');
const previewDescription = document.querySelector('#preview-description');
let selectedIndex = 0;

function previewMarkup(project) {
  return project.image
    ? `<img src="${project.image}" alt="${project.alt}">`
    : '<div class="no-capture">실제 화면 캡처 준비 중</div>';
}

function renderProjects() {
  list.innerHTML = projects.map((project, index) => `
    <div class="project-item">
      <button class="project-row" type="button" data-index="${index}" aria-expanded="${index === selectedIndex}">
        <span class="number">${String(index + 3).padStart(2, '0')}</span>
        <strong>${project.name}</strong>
        <span class="role">${project.role}</span>
      </button>
      <div class="mobile-preview${index === selectedIndex ? ' is-open' : ''}" data-mobile-preview="${index}">${previewMarkup(project)}</div>
    </div>`).join('');
  const selected = projects[selectedIndex];
  if (selected) {
    frame.innerHTML = previewMarkup(selected);
    previewTitle.textContent = selected.name;
    previewDescription.textContent = selected.description;
  }
}

function selectProject(index) {
  selectedIndex = selectedIndex === index && window.matchMedia('(max-width: 899px)').matches ? -1 : index;
  renderProjects();
  if (selectedIndex < 0) {
    frame.innerHTML = '<div class="no-capture">프로젝트를 선택하세요</div>';
    previewTitle.textContent = '';
    previewDescription.textContent = '';
  }
}

list.addEventListener('click', event => {
  const button = event.target.closest('[data-index]');
  if (button) selectProject(Number(button.dataset.index));
});

const navLinks = [...document.querySelectorAll('.section-nav a')];
const targets = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.5] });
targets.forEach(target => observer.observe(target));

renderProjects();
