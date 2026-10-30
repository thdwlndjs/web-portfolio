const projects = [
  {
    name: 'Milestone (News Bias)',
    previousName: 'News Bias Explorer',
    visible: true,
    description: '같은 사건을 다르게 다룬 기사를 찾고 비교하기 위한 뉴스 분석 프로젝트입니다. 기사 수집과 검색, 요약을 연결해 다양한 관점을 탐색합니다.',
    featured: true,
    kind: 'AI 엔지니어링 · 대표 프로젝트 01',
    subtitle: '다관점 기사 검색을 위한 검색 전략 설계와 성능 최적화',
    highlights: ['키워드 검색과 임베딩 기반 검색을 활용한 관련 기사 탐색', '기사 요약과 관점별 추천을 연결한 분석 흐름', '검색 품질과 관점 분류의 타당성은 추가 평가가 필요'],
    tags: ['Python', 'Elasticsearch', 'Node.js', 'React', 'Gemini'],
    image: 'news-bias-feature.png',
    imageAlt: 'News Bias Explorer 실제 화면 캡처',
    portrait: true,
    github: 'https://github.com/thdwlndjs/news-bias-analyzer'
  },
  {
    name: 'CLOS:IT (Smart Wardrobe)',
    previousName: 'Smart Wardrobe Agent',
    visible: true,
    description: '의류의 위치와 상태를 디지털로 관리하고 상황에 맞는 추천과 보관 흐름을 연결하는 스마트 옷장 프로토타입입니다.',
    featured: true,
    reverse: true,
    kind: 'AX 시스템 설계 · 대표 프로젝트 02',
    subtitle: '물리적 의류 상태의 디지털 모델링과 상황 기반 에이전트 설계',
    highlights: ['의류 위치와 관측 시각을 기록하고 확인되지 않은 위치를 구분', '가구 구성원별 접근과 의류 관리·추천 흐름을 연결', '가상 피팅 흐름은 Mock으로 검증했으며 실제 공급자 품질 평가는 과제'],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
    image: 'smart-wardrobe-web.png',
    imageAlt: 'Smart Wardrobe Agent 실제 화면 캡처',
    github: 'https://github.com/thdwlndjs/LG-CLOS-IT'
  },
  { name: 'Deal Scale', visible: false, description: '', imageAlt: 'Deal Scale 실제 화면 캡처 준비 중' },
  { name: 'Teams PM Bot', visible: true, description: 'GitHub 프로젝트 진행 현황과 담당 역할, 완료 작업 및 Notion 회의록 요약을 Teams에서 확인하는 봇입니다.', image: 'teams-echo-bot-start-menu-focused.png', imageAlt: 'Teams PM Bot 시작 인사와 기능 메뉴 화면' },
  { name: 'LG_AX', visible: false, description: '제품 사용 경험에 대한 연구 질문을 바탕으로 자료를 모으고, 사람의 검토와 선택에 따라 추가 탐색을 진행하는 프로젝트입니다.', image: 'lg-ax-demo-t60.png', imageAlt: 'LG_AX 실제 화면 캡처' },
  { name: 'InterviewIQ', visible: true, description: '시계열데이터와 좌표관절을 llm이 분석해서 일관성이 무너지는 부분을 분석하고 교정루프를 생성하는 웹서비스입니다.', image: 'interviewiq-local.png', imageAlt: 'InterviewIQ 실제 화면 캡처', github: 'https://github.com/thdwlndjs/InterviewIQ' },
  { name: 'TacitFlow', visible: true, description: '업무 기록과 매뉴얼 사이의 차이를 찾아 질문하고, 답변을 검토해 지식으로 정리하는 프로젝트입니다.', image: 'tacitflow-gaps-feature.png', imageAlt: 'TacitFlow 실제 화면 캡처', github: 'https://github.com/thdwlndjs/Tacitflow' },
  { name: 'WantWear', visible: true, description: '관심 패션 상품을 저장하고 품절 상태의 변화를 확인하는 웹 서비스 프로젝트입니다.', github: 'https://github.com/thdwlndjs/wantwear' },

  { name: 'CoachCU', visible: false, description: '작업 의도와 계획 시간을 설정하고, 세션 중 활성 앱과 유휴 시간을 기록하는 Windows용 개인 작업 코치입니다.', github: 'https://github.com/thdwlndjs/CoachCU' },
  { name: 'Personalized Travel Curator', visible: false, description: '이미지와 태그, 사용자 선호도를 활용해 여행지를 추천하는 프로젝트입니다.', github: 'https://github.com/thdwlndjs/personalized-travel-curator' },
  { name: 'Knowledge Graph', visible: false, description: 'FastAPI와 Neo4j를 연결해 논문 정보를 생성하고 조회하는 프로젝트입니다.', github: 'https://github.com/thdwlndjs/knowledge-graph' },
  { name: 'RecycleCenter', visible: false, description: '재활용과 아이템 분류를 소재로 한 Unity 팀 게임 프로젝트입니다.', github: 'https://github.com/gth3283/RecycleCenter' },
  { name: 'ASC', visible: false, description: '업무 의뢰를 접수하고 실행·검토·승인으로 연결하는 AI 워크플로 프로젝트입니다.', image: 'asc-b2c-web.png', imageAlt: 'ASC 실제 화면 캡처', github: 'https://github.com/thdwlndjs/ASC' },
  { name: '개발자 전투력 측정기', visible: false, description: '개발 역량을 전투력으로 표현해 결과를 보여 주는 인터랙티브 프로젝트입니다.', image: 'developer-power-meter-drill-focused.png', imageAlt: '개발자 전투력 측정기의 채점 결과, 역량별 그래프와 발견된 보완점' },
  { name: 'Dragon Slayer', visible: false, description: '드래곤과 대결하는 전투형 게임 프로젝트입니다.', image: 'dragonslayer.png', imageAlt: 'Dragon Slayer 실제 화면 캡처' },
  { name: 'Teams Echo Bot', visible: false, description: 'Microsoft Teams에서 GitHub 프로젝트 진행 현황과 내 역할, 완료 작업을 확인하고 Notion 회의록 요약을 연결하는 협업 봇입니다.', image: 'teams-echo-bot-start-menu-focused.png', imageAlt: 'Teams Echo Bot의 시작 인사와 네 가지 기능 메뉴' },
  { name: 'ShortsFactory', visible: false, description: 'Remotion과 TTS·효과음 생성을 연결해 대본 기반 세로형 쇼츠 영상을 구성하고 렌더링하는 제작 파이프라인입니다.' },
  { name: '검토 에이전트', visible: false, description: 'AI가 만든 서비스 초안을 시장·경쟁·실현 가능성 관점에서 검토하고 핵심 리스크와 개선 방향을 정리하는 Claude Code 스킬입니다.' },
  { name: 'KITE', visible: false, description: '초기 AI 제품 아이디어의 검증 신호를 출처와 함께 기록하고, 신호 수와 출처 다양성으로 검증 준비 상태를 확인하는 CLI 리서치 도구입니다.' },
  { name: 'OurDays', visible: false, description: '모바일 우선 달력에서 함께할 일정과 장소를 정리하고, 날짜별 상세와 지도 정보를 연결하는 데이트 다이어리입니다.', image: 'ourdays-preview.png', imageAlt: 'OurDays 실제 배포 화면 캡처' }
];

const visibleProjects = projects.filter(project => project.visible);
const featuredProjects = visibleProjects.filter(project => project.featured);
const additionalProjects = visibleProjects.filter(project => !project.featured);
const featuredList = document.querySelector('#featured-projects');
const list = document.querySelector('#project-list');
const preview = document.querySelector('#preview-image');
let selected = -1;

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const tagsHTML = tags => tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
const markup = project => project.image
  ? `<img src="./index_files/${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || `${project.name} 실제 화면 캡처`)}">`
  : '<div class="empty">실제 화면 캡처 준비 중</div>';
const projectLink = project => project.github
  ? `<a class="project-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
  : '';

function renderFeatured() {
  featuredList.innerHTML = featuredProjects.map(project => `
    <article class="feature${project.reverse ? ' reverse' : ''}">
      <div class="feature-image${project.portrait ? ' feature-image--screen' : ''}">${markup(project)}</div>
      <div class="feature-copy">
        <p class="kind">${escapeHTML(project.kind)}</p>
        <h3>${escapeHTML(project.name)}</h3>
        <h4>${escapeHTML(project.subtitle)}</h4>
        <p>${escapeHTML(project.description)}</p>
        <ul>${project.highlights.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>
        <div class="tags">${tagsHTML(project.tags)}</div>
        <a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">GitHub 보기 ↗</a>
      </div>
    </article>
  `).join('');
}

function renderAdditional() {
  list.innerHTML = additionalProjects.map((project, index) => `
    <article class="project">
      <button type="button" data-index="${index}" aria-expanded="${selected === index}">
        <span class="number">${String(index + featuredProjects.length + 1).padStart(2, '0')}</span>
        <strong>${escapeHTML(project.name)}</strong><span class="arrow">↗</span>
        ${project.description ? `<small>${escapeHTML(project.description)}</small>` : ''}
      </button>
      ${projectLink(project)}
      <div class="mobile-panel${selected === index ? ' open' : ''}">${markup(project)}</div>
    </article>
  `).join('');
  preview.innerHTML = selected < 0
    ? '<div class="empty">프로젝트를 선택하세요</div>'
    : markup(additionalProjects[selected]);
}

function choose(index) {
  if (matchMedia('(max-width:899px)').matches) {
    selected = selected === index ? -1 : index;
    renderAdditional();
    return;
  }
  previewProject(index);
}

function previewProject(index) {
  preview.innerHTML = markup(additionalProjects[index]);
}

list.addEventListener('click', event => {
  const button = event.target.closest('[data-index]');
  if (button) choose(Number(button.dataset.index));
});
list.addEventListener('mouseover', event => {
  const button = event.target.closest('[data-index]');
  if (button && !matchMedia('(max-width:899px)').matches) previewProject(Number(button.dataset.index));
});
list.addEventListener('focusin', event => {
  const button = event.target.closest('[data-index]');
  if (button) previewProject(Number(button.dataset.index));
});


const links = [...document.querySelectorAll('.nav a')];
const navStops = links.flatMap(link => {
  const href = link.getAttribute('href');
  const targets = href === '#projects' ? ['#projects', '#more'] : [href];
  return targets.map(target => ({ link, section: document.querySelector(target) })).filter(stop => stop.section);
});
function updateActiveNav() {
  const readingLine = window.innerHeight * 0.35;
  let current = navStops.filter(stop => stop.section.getBoundingClientRect().top <= readingLine).at(-1) || navStops[0];
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = navStops.at(-1);
  links.forEach(link => link.classList.toggle('active', link === current?.link));
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', updateActiveNav);
updateActiveNav();

renderFeatured();
renderAdditional();
