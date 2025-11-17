# 대한사 - 불교 사찰 웹사이트

불교 절을 소개하는 정적 웹사이트입니다. GitHub Pages를 통해 호스팅할 수 있습니다.

## 🏯 프로젝트 소개

이 프로젝트는 불교 사찰을 소개하는 웹사이트 템플릿입니다. 다음과 같은 섹션으로 구성되어 있습니다:

- **홈**: 메인 히어로 섹션
- **절 소개**: 사찰의 역사와 소개
- **주지스님 인사말**: 주지스님의 인사말
- **법회 안내**: 법회 및 프로그램 일정
- **갤러리**: 사찰 사진 갤러리
- **오시는 길**: 위치 정보 및 교통편 안내

## 🚀 GitHub Pages 배포 방법

### 1. GitHub 저장소 설정

```bash
git add .
git commit -m "Initial commit: 사찰 웹사이트 초안"
git push origin main
```

### 2. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. Settings > Pages 메뉴 선택
3. Source를 "Deploy from a branch" 선택
4. Branch를 "main" 선택, 폴더는 "/ (root)" 선택
5. Save 버튼 클릭

몇 분 후 `https://<username>.github.io/<repository-name>/` 주소로 접속 가능합니다.

## 📁 프로젝트 구조

```
webpage_test/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 인터랙션
├── images/             # 이미지 폴더
└── README.md           # 프로젝트 문서
```

## 🎨 커스터마이징 방법

### 1. 사찰 정보 수정

`index.html` 파일을 열어서 다음 내용을 수정하세요:

- 사찰 이름 (현재: "대한사")
- 주소 및 연락처
- 법회 일정 및 프로그램 정보
- 주지스님 인사말

### 2. 색상 테마 변경

`styles.css` 파일의 상단에 있는 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #8B4513;      /* 주 색상 */
    --secondary-color: #D4AF37;    /* 보조 색상 */
    --dark-brown: #5C3317;         /* 어두운 갈색 */
    --light-beige: #F5F5DC;        /* 밝은 베이지 */
}
```

### 3. 이미지 추가

`images/` 폴더에 실제 사찰 이미지를 추가하고, `index.html`의 `.image-placeholder` 부분을 다음과 같이 수정하세요:

```html
<!-- 변경 전 -->
<div class="image-placeholder">
    <p>📿</p>
    <p>대한사 전경</p>
</div>

<!-- 변경 후 -->
<img src="images/temple-main.jpg" alt="대한사 전경">
```

### 4. 지도 추가

오시는 길 섹션에 실제 지도를 추가하려면:

#### 카카오맵 API 사용:
1. [Kakao Developers](https://developers.kakao.com/)에서 앱 등록
2. JavaScript 키 발급
3. `index.html`에 API 스크립트 추가

#### 구글맵 임베드:
1. [Google Maps](https://www.google.com/maps)에서 원하는 위치 검색
2. "공유" > "지도 퍼가기" 클릭
3. iframe 코드를 복사하여 `.location-map` 안에 삽입

## 📱 반응형 디자인

이 웹사이트는 다음 화면 크기에 최적화되어 있습니다:

- 데스크톱 (1200px 이상)
- 태블릿 (768px ~ 1199px)
- 모바일 (767px 이하)

## 🌟 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 햄버거 메뉴 (모바일)
- ✅ 스크롤시 네비게이션 바 효과
- ✅ 섹션별 페이드인 애니메이션
- ✅ 호버 효과

## 🛠️ 기술 스택

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts (Noto Serif KR)

## 📝 추가 개선 사항

다음 기능들을 추가로 구현할 수 있습니다:

- [ ] 실제 이미지 갤러리 (Lightbox 기능)
- [ ] 블로그/공지사항 섹션
- [ ] 온라인 예약 시스템
- [ ] 다국어 지원 (영어, 일본어 등)
- [ ] SEO 최적화
- [ ] 구글 애널리틱스 연동
- [ ] 사이트맵 생성

## 📄 라이선스

이 프로젝트는 자유롭게 사용 및 수정 가능합니다.

## 💬 문의

웹사이트 관련 문의사항은 이슈를 등록해 주세요.
