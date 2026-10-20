const featured = [
  {
    name: 'News Bias Explorer', category: '다관점 뉴스 검색·분석', role: 'AI 엔지니어링', status: '대표 프로젝트 01',
    description: '같은 사건을 다르게 다룬 기사를 찾고 비교하기 위한 뉴스 분석 프로젝트입니다. 기사 수집과 검색, 요약을 연결해 다양한 관점을 탐색합니다.',
    highlights: ['키워드 검색과 임베딩 기반 검색을 활용한 관련 기사 탐색', '기사 요약과 관점별 추천을 연결한 분석 흐름', '검색 품질과 관점 분류의 타당성은 추가 평가가 필요'],
    tags: ['Python', 'Elasticsearch', 'Node.js', 'React', 'Gemini'], visual: 'chart', label: 'news bias explorer / concept',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], group: 'AI·데이터', github: 'https://github.com/thdwlndjs/news-bias-analyzer'
  },
  {
    name: 'Smart Wardrobe Agent', category: '의류 상태 모델링·스마트 옷장', role: 'AX 시스템 설계', status: '대표 프로젝트 02',
    description: '의류의 위치와 상태를 디지털로 관리하고 상황에 맞는 추천과 보관 흐름을 연결하는 스마트 옷장 프로토타입입니다.',
    highlights: ['의류 위치와 관측 시각을 기록하고 확인되지 않은 위치를 구분', '가구 구성원별 접근과 의류 관리·추천 흐름을 연결', '가상 피팅 흐름은 Mock으로 검증했으며 실제 공급자 품질 평가는 과제'],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery'], visual: 'dashboard', label: 'smart wardrobe / concept',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], group: 'AI·데이터', github: 'https://github.com/thdwlndjs/LG-CLOS-IT'
  }
];

const projects = [
  {
    name: 'TacitFlow', category: '업무 지식 추출·검증', role: '핵심 보조 프로젝트', group: 'AI·데이터', date: '프로토타입',
    description: '업무 기록과 매뉴얼 사이의 설명되지 않는 차이를 찾아 질문하고, 답변을 검토해 지식으로 정리하는 프로젝트입니다.',
    highlight: '반복되는 업무 차이에서 질문과 지식 검증으로 이어지는 흐름',
    highlights: ['기존 지식과 관측된 행동의 차이를 탐색', '질문에 쓰지 않은 별도 업무 사례로 후보 지식을 재검사', '실제 업무 데이터와 전문가 평가를 통한 유용성 검증은 과제'],
    tags: ['Python', 'PostgreSQL', 'Next.js', 'Gemini'], visual: 'dashboard', tone: 'violet',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/Tacitflow'
  },
  {
    name: 'InterviewIQ', category: 'AI 모의면접·멀티모달 처리', role: '핵심 보조 프로젝트', group: 'AI·데이터', date: '프로젝트',
    description: '면접 답변의 음성과 영상 데이터를 답변 단위로 연결하고, 음성 전사와 다음 질문 생성 흐름을 제공하는 모의면접 프로젝트입니다.',
    highlight: '답변 단위 데이터 수집과 음성 전사 실패 시 대체 경로',
    highlights: ['답변 중 수집한 영상 데이터와 녹음을 세션·답변 단위로 연결', '음성 전사 실패 시 가능한 경우 브라우저 전사 등을 사용', '실제 음성 기반 통합 검증과 분석 품질 평가는 추가 확인'],
    tags: ['Python', 'FastAPI', 'Redis', 'Next.js', 'STT'], visual: 'chart', tone: 'blue',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/InterviewIQ'
  },
  {
    name: 'LG_AX', category: '제품 연구·근거 탐색 에이전트', role: '추가 프로젝트', group: 'AI·데이터', date: '프로토타입',
    description: '제품 사용 경험에 대한 연구 질문을 바탕으로 후기 등 자료를 수집하고, 사람의 검토와 선택에 따라 추가 탐색을 진행하는 프로젝트입니다.',
    highlight: '근거 수집과 사람의 판단을 연결하는 단계별 연구 흐름',
    highlights: ['연구 범위 확인부터 원문 근거 검토까지 연결', '사람이 선택한 관찰에 대해 제한적으로 추가 탐색', '탐색 결과와 실제 제품 필요성 검증을 구분'],
    tags: ['Python', 'LLM', 'Gradio'], visual: 'chart', tone: 'mint', slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님']
  },
  {
    name: 'WantWear', category: '패션 상품 저장·재입고 감지', role: '추가 프로젝트', group: '웹 서비스', date: '프로젝트',
    description: '관심 패션 상품을 저장하고 품절 상태의 변화를 확인하는 웹 서비스 프로젝트입니다.',
    highlight: '사용자별 상품 관리와 주기적인 재입고 상태 감지',
    highlights: ['사용자 인증과 상품별 조회·저장 흐름', '주기적인 품절 상태 확인과 재입고 변화 감지', '실제 푸시 발송은 미구현 상태'],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React'], visual: 'dashboard', tone: 'warm',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/wantwear'
  },
  {
    name: 'CoachCU', category: '개인 작업 세션 코치', role: '추가 프로젝트', group: '개발 도구', date: 'MVP',
    description: '작업 의도와 계획 시간을 설정하고, 세션 중 활성 앱과 유휴 시간을 기록하는 Windows용 개인 작업 코치입니다.',
    highlight: '작업 맥락에 따른 판단과 로컬 세션 기록',
    highlights: ['활성 앱과 유휴 시간, 세션 결과를 로컬 SQLite에 기록', '선택적인 Groq 기반 작업 제안과 호출 실패 시 로컬 규칙 기반 전환', 'AI는 작업을 제안하고 세션 시작과 저장은 사용자와 로컬 코드가 제어'],
    tags: ['Python', 'PySide6', 'SQLite', 'Groq', 'Windows'], visual: 'chart', tone: 'blue',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/CoachCU'
  },
  {
    name: 'Personalized Travel Curator', category: '개인화 여행지 추천', role: '추가 프로젝트', group: 'AI·데이터', date: '프로젝트',
    description: '이미지와 태그, 사용자 선호도를 활용해 여행지를 추천하는 프로젝트입니다.',
    highlight: '태그 기반 선호도와 유사도를 활용한 여행지 탐색',
    highlights: ['이미지의 텍스트와 태그를 활용한 여행지 정보 구성', '사용자 선호도와 태그 벡터의 유사도를 이용한 추천', '추천 품질과 실제 사용 경험에 대한 검증은 추가 확인'],
    tags: ['Python', 'Google Cloud Vision', 'MariaDB', 'scikit-learn'], visual: 'chart', tone: 'mint',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/personalized-travel-curator'
  },
  {
    name: 'Knowledge Graph', category: '논문 데이터 관리', role: '추가 프로젝트', group: '개발 도구', date: '프로젝트',
    description: 'FastAPI와 Neo4j를 연결해 논문 정보를 생성하고 조회하는 프로젝트입니다.',
    highlight: 'API와 그래프 데이터베이스를 연결한 논문 정보 관리',
    highlights: ['논문 정보 생성·조회 API', '서비스와 저장소 계층을 통한 Neo4j 연결', '관계 탐색과 프로젝트 활용 범위는 추가 확인'],
    tags: ['Python', 'FastAPI', 'Neo4j', 'Docker'], visual: 'chart', tone: 'violet',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/knowledge-graph'
  },
  {
    name: 'RecycleCenter', category: 'Unity 게임 프로젝트', role: '추가 프로젝트', group: '게임', date: '프로젝트',
    description: '재활용과 아이템 분류를 소재로 한 Unity 팀 게임 프로젝트입니다.',
    highlight: '아이템을 재질에 따라 분류하는 게임 흐름',
    highlights: ['아이템의 종류와 재질을 구분하는 구조', '드래그한 아이템을 분류 영역에 놓는 상호작용', '개인 담당 범위와 완성된 게임 흐름은 추가 확인'],
    tags: ['Unity', 'C#'], visual: 'chart', tone: 'warm',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/gth3283/RecycleCenter'
  },
  {
    name: 'ASC', category: 'AI 업무 워크플로', role: '추가 프로젝트', group: 'AI·데이터', date: '프로토타입',
    description: '업무 의뢰를 접수하고 실행·검토·승인으로 연결하는 AI 워크플로 프로젝트입니다.',
    highlight: '업무 단계와 사람의 승인·재개 흐름',
    highlights: ['의뢰 접수부터 실행·검토·승인까지의 흐름', '외부 서비스 연동의 실제 환경 검증은 추가 과제'],
    tags: ['Python', 'FastAPI', 'LangGraph'], visual: 'dashboard', tone: 'dark',
    slides: ['프로젝트 개념 이미지 · 실제 서비스 화면 아님'], github: 'https://github.com/thdwlndjs/ASC'
  }
];

const allProjects = [...featured, ...projects];
const byId = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const tagsHTML = tags => tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
const listHTML = items => items.map(item => `<li>${escapeHTML(item)}</li>`).join('');
const githubHTML = project => project.github ? `<a class="text-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : '';

function mockHTML(project, slide = 0) {
  const tone = escapeHTML(project.tone || (project.visual === 'phone' ? 'warm' : 'blue'));
  const title = escapeHTML(project.name);
  if (project.visual === 'phone') {
    return `<div class="mock mock-phone-wrap mock-${tone}" aria-hidden="true"><div class="mock-phone"><b>${title}</b><small>YOUR DAILY COMPANION</small><div class="phone-banner">${slide % 2 ? '오늘의 새로운 발견' : '나에게 맞는 하루를 시작해요'}<br><br>●　●　●</div><div class="phone-line short"></div><div class="phone-line"></div><div class="phone-box"></div><div class="phone-line short"></div><div class="phone-button"></div></div></div>`;
  }
  if (project.visual === 'dashboard') {
    return `<div class="mock mock-${tone}" aria-hidden="true"><div class="mock-dashboard"><div class="mock-nav">${title}　 /　 Overview　　　　　　　　　　　　　•••</div><div class="mock-side"></div><div class="mock-content"><strong>Overview</strong><div class="mock-stats"><i></i><i></i><i></i></div><div class="mock-table"></div></div><div class="mock-overlay"><div class="mock-modal"><b>${slide % 2 ? '상세 정보' : '대시보드'}</b><small>Overview　 ·　 Recent activity</small><div class="mock-table"></div></div></div></div></div>`;
  }
  return `<div class="mock mock-${tone}" aria-hidden="true"><div class="mock-chart"><b>${title}</b><p style="font-size:8px;color:#9299a4">Overview　 /　 ${slide % 2 ? 'DETAILS' : 'DASHBOARD'}</p></div></div>`;
}

function renderFeatured() {
  byId('featured-projects').innerHTML = featured.map((project, index) => `<article class="project"><div class="project-content"><div class="project-meta"><span class="project-number">${String(index + 1).padStart(2, '0')}</span><span>${escapeHTML(project.role)}</span><span class="project-status">${escapeHTML(project.status)}</span></div><h3><button class="project-title" data-open="${index}">${escapeHTML(project.name)} <span aria-hidden="true">↗</span></button></h3><p class="project-category">${escapeHTML(project.category)}</p><p class="project-description">${escapeHTML(project.description)}</p><ul class="implementation-list">${listHTML(project.highlights)}</ul><div class="tags">${tagsHTML(project.tags)}</div><div class="project-actions"><button class="small-button" data-open="${index}">상세 · 미리보기 <span aria-hidden="true">→</span></button>${githubHTML(project)}</div></div><button class="project-preview ${project.visual === 'phone' ? 'mobile-preview' : ''}" data-open="${index}" aria-label="${escapeHTML(project.name)} 미리보기"><span class="preview-toolbar"><span>${escapeHTML(project.label)}</span><span>↗</span></span><span class="preview-image">${mockHTML(project)}</span><span class="preview-caption"><span>프로젝트 개념 이미지</span><span>→</span></span></button></article>`).join('');
}

let activeGroup = '전체';
const groups = ['전체', 'AI·데이터', '웹 서비스', '개발 도구', '게임', '기타'];
function renderFilters() {
  byId('group-filters').innerHTML = groups.map(group => {
    const count = group === '전체' ? projects.length : projects.filter(project => project.group === group).length;
    return `<button type="button" data-group="${escapeHTML(group)}" aria-pressed="${group === activeGroup}">${escapeHTML(group)}<span>${count}</span></button>`;
  }).join('');
}
function renderGrid() {
  const query = byId('project-search').value.trim().toLocaleLowerCase();
  const visible = projects.filter(project => (activeGroup === '전체' || project.group === activeGroup) && [project.name, project.category, project.description, project.group, ...project.tags].join(' ').toLocaleLowerCase().includes(query));
  byId('project-grid').innerHTML = visible.map(project => {
    const index = allProjects.indexOf(project);
    return `<article class="grid-card" aria-label="${escapeHTML(project.name)}"><button class="grid-visual" data-open="${index}" aria-label="${escapeHTML(project.name)} 프로젝트 상세 보기">${mockHTML(project)}<span class="visual-count">CONCEPT IMAGE</span><span class="visual-arrow" aria-hidden="true">↗</span></button><div class="grid-content"><div class="grid-meta"><span>${String(index + 1).padStart(2, '0')} / ${escapeHTML(project.category)}</span><span>${escapeHTML(project.date)}</span></div><button class="grid-title" data-open="${index}">${escapeHTML(project.name)} <span aria-hidden="true">↗</span></button><p class="grid-role">${escapeHTML(project.role)}</p><p class="grid-description">${escapeHTML(project.description)}</p><p class="grid-highlight">${escapeHTML(project.highlight)}</p><div class="tags">${tagsHTML(project.tags)}</div><div class="grid-actions"><button class="small-button" data-open="${index}">상세 보기 <span aria-hidden="true">→</span></button>${githubHTML(project)}</div></div></article>`;
  }).join('');
  byId('result-count').textContent = `${visible.length}개 표시 / 추가 프로젝트 ${projects.length}개`;
  byId('empty').hidden = visible.length > 0;
}

const dialog = byId('project-dialog');
let currentProject = null;
let currentSlide = 0;
let lastTrigger = null;
function renderSlide() {
  byId('gallery-stage').innerHTML = mockHTML(currentProject, currentSlide);
  byId('gallery-caption').textContent = currentProject.slides[currentSlide];
  byId('gallery-count').textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(currentProject.slides.length).padStart(2, '0')}`;
}
function openProject(index, trigger) {
  currentProject = allProjects[index];
  if (!currentProject) return;
  currentSlide = 0;
  lastTrigger = trigger;
  byId('dialog-meta').textContent = `${String(index + 1).padStart(2, '0')} / ${currentProject.group}`;
  byId('dialog-title').textContent = currentProject.name;
  byId('dialog-category').textContent = `${currentProject.category} · ${currentProject.role}`;
  byId('dialog-description').textContent = currentProject.description;
  byId('dialog-highlights').innerHTML = listHTML(currentProject.highlights || [currentProject.highlight]);
  byId('dialog-tags').innerHTML = tagsHTML(currentProject.tags);
  renderSlide();
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
function closeProject() { dialog.close(); }
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + currentProject.slides.length) % currentProject.slides.length;
  renderSlide();
}

document.addEventListener('click', event => {
  const open = event.target.closest('[data-open]');
  if (open) openProject(Number(open.dataset.open), open);
  const group = event.target.closest('[data-group]');
  if (group) { activeGroup = group.dataset.group; renderFilters(); renderGrid(); }
});
byId('project-search').addEventListener('input', renderGrid);
byId('reset-filters').addEventListener('click', () => { activeGroup = '전체'; byId('project-search').value = ''; renderFilters(); renderGrid(); byId('project-search').focus(); });
byId('close-dialog').addEventListener('click', closeProject);
byId('dialog-close-text').addEventListener('click', closeProject);
byId('gallery-prev').addEventListener('click', () => changeSlide(-1));
byId('gallery-next').addEventListener('click', () => changeSlide(1));
dialog.addEventListener('click', event => { if (event.target === dialog) closeProject(); });
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastTrigger?.focus(); });
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') changeSlide(-1); if (event.key === 'ArrowRight') changeSlide(1); });
byId('copy-email').addEventListener('click', async () => {
  const button = byId('copy-email');
  try { await navigator.clipboard.writeText('hello@example.com'); button.textContent = '복사됨'; }
  catch { button.textContent = '복사 실패'; }
  setTimeout(() => { button.textContent = '복사'; }, 2000);
});
function toggleGuide(open) { byId('guide-panel').hidden = !open; byId('guide-trigger').setAttribute('aria-expanded', String(open)); }
byId('guide-trigger').addEventListener('click', () => toggleGuide(byId('guide-panel').hidden));
byId('guide-close').addEventListener('click', () => { toggleGuide(false); byId('guide-trigger').focus(); });
byId('guide-panel').addEventListener('click', event => { if (event.target.closest('a')) toggleGuide(false); });
function updateProgress() { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty('--progress', max > 0 ? scrollY / max : 0); }
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
const desktopLayout = matchMedia('(min-width: 1180px)');
function arrangePortfolioLayout() {
  const shell = document.querySelector('.page-shell');
  const work = document.querySelector('.work');
  const intro = document.querySelector('.intro');
  const about = document.querySelector('.about');
  const contact = document.querySelector('.contact');
  const footer = document.querySelector('.site-footer');
  if (!shell || !work || !intro || !about || !contact || !footer) return;
  let sidebar = shell.querySelector(':scope > .sidebar');
  if (desktopLayout.matches) {
    if (!sidebar) { sidebar = document.createElement('div'); sidebar.className = 'sidebar'; shell.insertBefore(sidebar, work); }
    [intro, about, contact, footer].forEach(section => sidebar.append(section));
  } else if (sidebar) {
    shell.insertBefore(intro, work);
    let previous = work;
    [about, contact, footer].forEach(section => { previous.after(section); previous = section; });
    sidebar.remove();
  }
}
arrangePortfolioLayout();
desktopLayout.addEventListener('change', arrangePortfolioLayout);
byId('total-count').textContent = allProjects.length;
byId('collection-count').textContent = projects.length;
renderFeatured(); renderFilters(); renderGrid(); updateProgress();
