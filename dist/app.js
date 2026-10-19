const featured = [
  { name: 'ClassFlow', category: '출결 관리 PWA', role: '1인 기획·개발', status: '샘플 프로젝트', description: '반복되는 출결 관리의 번거로움을 줄이기 위한 서비스입니다. 간편한 체크인과 실시간 현황에서 시작해 확인과 관리 업무까지 하나의 흐름으로 연결했습니다.', highlights: ['간편한 체크인과 사용자 확인을 거치는 출결 흐름', '실시간 데이터로 한눈에 보는 출석 현황'], tags: ['React', 'TypeScript', 'Realtime', 'PWA', 'Vite'], visual: 'dashboard', label: 'classflow / dashboard', slides: ['출결 현황 대시보드', '사용자별 기록', '실시간 현황'], group: '웹 서비스' },
  { name: 'Wayfinder', category: 'AI 여행 가이드 앱', role: '팀 프로젝트 · 서비스 설계', status: '샘플 프로젝트', description: '낯선 곳에서도 편하게 선택할 수 있도록 정보를 정리하는 여행 앱입니다. 장소를 탐색하고 필요한 정보를 확인하는 경험을 작은 화면에 담았습니다.', highlights: ['여행자의 탐색 흐름에 맞춘 모바일 화면 설계', '이미지와 텍스트를 연결한 정보 탐색 경험'], tags: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'AI API'], visual: 'phone', label: 'wayfinder / mobile', slides: ['여행 가이드 홈', '장소 탐색', '상세 정보', '저장한 장소'], group: '모바일' }
];

const projects = [
  { name: 'Mood Atlas', category: 'AI 콘텐츠 추천', role: '팀 프로젝트', group: 'AI·데이터', date: '2026 · 샘플', description: '취향을 바탕으로 콘텐츠를 발견하는 추천 서비스. 질문과 답변을 따라가며 새로운 이야기를 만나는 경험을 담았습니다.', highlight: '관심사 탐색과 추천 결과를 하나의 흐름으로 연결', tags: ['Next.js', 'TypeScript', 'FastAPI', 'AI'], visual: 'chart', tone: 'violet', slides: ['추천 홈', '취향 탐색', '추천 결과'] },
  { name: 'Little Routine', category: '운동 기록 앱', role: '모바일 프로젝트', group: '모바일', date: '2025 · 샘플', description: '매일의 움직임을 가볍게 기록하고 꾸준한 습관으로 이어주는 모바일 앱입니다.', highlight: '기록과 달력을 한눈에 확인하는 화면', tags: ['React', 'TypeScript', 'Zustand', 'PWA'], visual: 'phone', tone: 'warm', slides: ['오늘의 기록', '활동 달력', '나의 통계'] },
  { name: 'Clear Talk', category: 'AI 대화 연습 웹앱', role: '팀 프로젝트', group: 'AI·데이터', date: '2025 · 샘플', description: '다양한 상황에서 대화를 연습하고 다음 표현을 생각해 볼 수 있는 커뮤니케이션 도구입니다.', highlight: '대화 기록과 피드백을 함께 살펴보는 인터페이스', tags: ['React', 'TypeScript', 'Node.js', 'AI'], visual: 'dashboard', tone: 'blue', slides: ['대화 연습', '상황 선택', '피드백'] },
  { name: 'Insight Board', category: '고객 의견 분석', role: '웹 · 데이터 흐름 구현', group: 'AI·데이터', date: '2026 · 샘플', description: '흩어진 의견을 주제별로 살펴보고 중요한 변화를 발견하는 분석 대시보드입니다.', highlight: '요약과 원문을 오가며 살펴보는 분석 흐름', tags: ['Next.js', 'Python', 'PostgreSQL', 'Charts'], visual: 'chart', tone: 'blue', slides: ['분석 대시보드', '주제별 의견'] },
  { name: 'Quiet Room', category: '3D 웹 경험', role: '인터랙티브 프로젝트', group: '게임', date: '2026 · 샘플', description: '브라우저에서 공간을 탐색하며 작은 단서를 발견하는 인터랙티브 경험입니다.', highlight: '3D 공간과 사용자의 움직임을 연결', tags: ['Three.js', 'JavaScript', 'WebGL', 'Audio'], visual: 'chart', tone: 'dark', slides: ['시작 화면', '공간 탐색', '장면 전환'] },
  { name: 'Daily Table', category: '식단 · 활동 관리 앱', role: '모바일 프로젝트', group: '모바일', date: '2026 · 샘플', description: '하루의 식사와 활동을 함께 기록하며 나에게 맞는 리듬을 찾는 앱입니다.', highlight: '복잡한 정보를 간결한 일일 요약으로 구성', tags: ['React Native', 'TypeScript', 'Supabase', 'Expo'], visual: 'phone', tone: 'mint', slides: ['오늘의 요약', '식사 기록', '활동 내역'] },
  { name: 'Place Notes', category: '장소 큐레이션 PWA', role: '웹 서비스 개발', group: '웹 서비스', date: '2026 · 샘플', description: '가고 싶은 장소를 모으고 친구들과 여행의 다음 목적지를 고르는 작은 웹앱입니다.', highlight: '지도 탐색과 나만의 장소 목록', tags: ['Next.js', 'TypeScript', 'Maps', 'PWA'], visual: 'chart', tone: 'mint', slides: ['장소 탐색', '상세 정보', '저장 목록'] },
  { name: 'Room Together', category: '공간 예약 서비스', role: '웹 · 예약 흐름 개발', group: '웹 서비스', date: '2026 · 샘플', description: '함께 쓰는 공간의 시간을 한눈에 보고 필요한 시간대를 예약하는 서비스입니다.', highlight: '예약 현황과 사용 규칙을 이해하기 쉬운 화면으로 표현', tags: ['React', 'TypeScript', 'PostgreSQL', 'Auth'], visual: 'dashboard', tone: 'cream', slides: ['예약 현황', '시간 선택', '예약 확인'] },
  { name: 'Word Index', category: '단어 탐색 도구', role: '데스크톱 도구', group: '개발 도구', date: '2026 · 샘플', description: '필요한 단어를 빠르게 찾고 정리할 수 있도록 만든 작은 데스크톱 도구입니다.', highlight: '검색과 선택, 복사까지 이어지는 간결한 작업 흐름', tags: ['Tauri', 'Rust', 'JavaScript', 'Python'], visual: 'dashboard', tone: 'violet', slides: ['단어 검색', '결과 목록'] },
  { name: 'Pixel Duel', category: '실시간 웹게임', role: '게임 프로젝트', group: '게임', date: '2025 · 샘플', description: '두 플레이어가 같은 화면에서 즐기는 가벼운 실시간 웹게임입니다.', highlight: '플레이어 입력과 화면 상태를 실시간으로 연결', tags: ['React', 'TypeScript', 'WebSocket', 'Canvas'], visual: 'chart', tone: 'dark', slides: ['게임 화면', '결과 화면'] },
  { name: 'Data Studio', category: '데이터 탐색 도구', role: '개발 도구', group: '개발 도구', date: '2026 · 샘플', description: '데이터를 불러와 구조를 살펴보고 필요한 결과를 빠르게 확인하는 도구입니다.', highlight: '데이터 확인부터 결과 시각화까지 연결', tags: ['Python', 'SQL', 'React', 'Charts'], visual: 'chart', tone: 'blue', slides: ['데이터 탐색', '결과 시각화'] },
  { name: 'Playlist Room', category: '함께 듣는 음악 큐', role: '웹 서비스 개발', group: '웹 서비스', date: '2026 · 샘플', description: '함께 듣고 싶은 음악을 모으고 재생 순서를 공유하는 웹 서비스입니다.', highlight: '신청곡과 대기열을 한 화면에서 확인', tags: ['React', 'TypeScript', 'FastAPI', 'WebSocket'], visual: 'dashboard', tone: 'dark', slides: ['음악 대기열', '플레이어'] }
];

const allProjects = [...featured, ...projects];
const byId = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const tagsHTML = tags => tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
const listHTML = items => items.map(item => `<li>${escapeHTML(item)}</li>`).join('');

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
  byId('featured-projects').innerHTML = featured.map((project, index) => `<article class="project"><div class="project-content"><div class="project-meta"><span class="project-number">${String(index + 1).padStart(2, '0')}</span><span>${escapeHTML(project.role)}</span><span class="project-status">${escapeHTML(project.status)}</span></div><h3><button class="project-title" data-open="${index}">${escapeHTML(project.name)} <span aria-hidden="true">↗</span></button></h3><p class="project-category">${escapeHTML(project.category)}</p><p class="project-description">${escapeHTML(project.description)}</p><ul class="implementation-list">${listHTML(project.highlights)}</ul><div class="tags">${tagsHTML(project.tags)}</div><div class="project-actions"><button class="small-button" data-open="${index}">상세 · 미리보기 <span aria-hidden="true">→</span></button><button class="text-link plain-button" data-open="${index}">프로젝트 살펴보기 <span aria-hidden="true">↗</span></button></div></div><button class="project-preview ${project.visual === 'phone' ? 'mobile-preview' : ''}" data-open="${index}" aria-label="${escapeHTML(project.name)} 미리보기"><span class="preview-toolbar"><span>${escapeHTML(project.label)}</span><span>↗</span></span><span class="preview-image">${mockHTML(project)}</span><span class="preview-caption"><span>예시 화면 ${project.slides.length}장 보기</span><span>→</span></span></button></article>`).join('');
}

let activeGroup = '전체';
const groups = ['전체', 'AI·데이터', '웹 서비스', '모바일', '게임', '개발 도구'];
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
    return `<article class="grid-card" aria-label="${escapeHTML(project.name)}"><button class="grid-visual" data-open="${index}" aria-label="${escapeHTML(project.name)} 프로젝트 상세 보기">${mockHTML(project)}<span class="visual-count">PREVIEW / ${String(project.slides.length).padStart(2, '0')}</span><span class="visual-arrow" aria-hidden="true">↗</span></button><div class="grid-content"><div class="grid-meta"><span>${String(index + 1).padStart(2, '0')} / ${escapeHTML(project.category)}</span><span>${escapeHTML(project.date)}</span></div><button class="grid-title" data-open="${index}">${escapeHTML(project.name)} <span aria-hidden="true">↗</span></button><p class="grid-role">${escapeHTML(project.role)}</p><p class="grid-description">${escapeHTML(project.description)}</p><p class="grid-highlight">${escapeHTML(project.highlight)}</p><div class="tags">${tagsHTML(project.tags)}</div><div class="grid-actions"><button class="small-button" data-open="${index}">상세 보기 <span aria-hidden="true">→</span></button><button class="text-link plain-button" data-open="${index}">화면 보기 ↗</button></div></div></article>`;
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
byId('total-count').textContent = allProjects.length;
byId('collection-count').textContent = projects.length;
renderFeatured(); renderFilters(); renderGrid(); updateProgress();
