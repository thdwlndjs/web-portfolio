
> **Phase 2 execution amendment ? 2026-10-21**
> - Active implementation target: existing portfolio files under `dist/index.html` and `dist/index_files/`. Keep the static-site architecture; do not introduce React, Vite, or another build system.
> - `dist/redesign-preview/` is an immutable approved-reference snapshot. Do not modify, delete, regenerate, or deploy it as part of Phase 2.
> - Before changing a shared file, verify that the preview has no dependency on it. The preview may reuse only image assets from `dist/index_files/`; its HTML, CSS, and JavaScript remain isolated.
> - Git push and deployment require separate user approval after tests, screenshots, and review are complete.

# Codex 작업 지침 — Web Portfolio Redesign

## 목적과 작업 경계
- 저장소 루트: `C:\Users\aicam\Desktop\웹포트폴리오` (실제 루트 여부는 `package.json`·빌드 설정으로 확인).
- 수정 대상: `/redesign-preview/`에 대응하는 **원본 소스**. `dist/redesign-preview/index.html`은 빌드 산출물로 직접 수정하지 않는다.
- 기존 운영 포트폴리오를 보호한다. 승인 전 운영 경로를 대체하거나 임의로 배포하지 않는다.
- 첫 실행 범위는 **Phase 1: Audit & Specification**만이다. 사용자 승인 없이 구현 단계로 넘어가지 않는다.

## 문서 읽기 순서와 우선순위
1. `docs/design/redesign-spec.md` — **현재 유효한 요구사항과 수용 기준**. 작업의 단일 기준.
2. `docs/design/decisions.md` — 결정 상태, 선택 이유 및 미확정 사항 확인.
3. `docs/design/discussion-archive.md` — 명세에 누락/충돌/모호성이 있는 경우에만 해당 주제 검색.
4. 원래 6,317줄 대화 원문이 별도로 제공된 경우에만 해당 원문을 증거로 활용. **아카이브 재구성본을 원문 전문으로 착각하지 말 것.**

충돌이 생기면 최신의 **사용자 명시적 승인 > 유효 명세 > 결정 이력 > 토론 아카이브 > 구현 현황** 순으로 판단한다. 단, 사용자 승인의 뜻이 불분명하면 임의 결정하지 말고 질문한다. 현재 코드의 동작 자체는 변경 승인의 근거가 아니다.

## 협업 프로토콜 — 디자인 선택 전에 반드시 적용
**실제 레퍼런스 → 요소별 비교 → 선택지·트레이드오프 → 사용자 선택 → 상태 기록 → 실화면 검증**
- 새 디자인 선택 전에는 실제 운영 사이트/공식 디자인 사례의 원본 URL, 관련 화면(가능할 때 스크린샷), 차용할 세부 요소를 제시한다.
- 정적 스크린샷만 보고 Hover·Sticky 동작을 검증했다고 주장하지 않는다. AI 제작 시안은 실제 레퍼런스와 구분한다.
- 최종 확정, 우선 실험, 미확정을 구분한다. 선택한 레퍼런스의 핵심 구조를 허락 없이 변경하지 않는다.
- 선택지가 명백한 문제를 해결하지 못하면 새로운 실질적 대안을 제안한다. 불필요한 삼지선다·형식적인 질문은 하지 않는다.
- '응/진행/확인'은 **직전 범위의 진행 승인**으로만 해석한다. 결정되지 않은 색상/콘텐츠/배포까지 승인된 것으로 보지 않는다.
- 코드에서 확인 가능한 구현 상세는 우선 직접 조사한다.

## 실행 워크플로 — SDD + 기능별 TDD + Visual QA
1. **Audit**: 기존 코드·미리보기·테스트·이미지·프로젝트 메타데이터를 조사. 확인된 사실과 가정을 분리.
2. **Specification**: 명세의 수용 기준을 현재 코드에 매핑. 미정 디자인은 결정 요청으로 보고.
3. **Approval gate**: 사용자에게 Phase 1 결과를 공유하고 구현 승인 요청.
4. **TDD**: 인터랙션/기능에서 실패 테스트 작성(Red) → 최소 구현(Green) → 리팩터링(Refactor). 의미 없는 CSS 단위 테스트는 금지.
5. **Visual QA**: 실제 브라우저에서 주요 해상도와 동작 상태 스크린샷 비교. 테스트 통과 ≠ 디자인 승인.
6. **Review**: 구현 항목, 테스트 증거, 스크린샷, 명세 불일치, 남은 결정 보고. 승인받은 범위만 완료 처리.

## 내용과 품질 원칙
- 사실이 확인되지 않은 경력·수상·논문·성과 수치·기술을 창작하지 않는다. 프로젝트별 내용은 원본 소스를 확인한다.
- 프로젝트 제목·설명·링크를 임의로 교체하지 않는다. 내부 분류명(예: '추가 프로젝트')을 기능 설명인 것처럼 쓰지 않는다.
- 데스크톱 Hover/Focus는 키보드로도 작동해야 하며 모바일의 핵심 기능은 Hover에 의존하면 안 된다.
- `prefers-reduced-motion`, 포커스 표시, 터치 타깃, 이미지 대체 텍스트와 가로 오버플로를 확인한다.
- 문서는 아래 세 파일을 갱신한다. 같은 요건을 중복된 새 문서 여러 개에 작성하지 않는다.
- 테스트 도구와 빌드 명령은 저장소를 조사한 후 정한다. 설치가 필요하면 이유와 변경 범위를 먼저 보고한다.

## 첫 응답 형식 (Phase 1)
1. 현재 소스/빌드/테스트 구조(확인한 경로 포함)
2. 요구사항 대비 **준수 / 불일치 / 미구현 / 확인 불가** 표
3. 사실 검증이 필요한 콘텐츠 목록
4. 기능 테스트 계획과 Visual QA 계획
5. 사용자 결정을 기다려야 하는 항목

**Phase 1에서는 승인되지 않은 코드 수정을 수행하지 않는다.**
