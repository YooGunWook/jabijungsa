# 카카오맵 API 설정 가이드

카카오맵을 웹사이트에 표시하기 위한 설정 방법입니다.

## 📌 1단계: API 키 발급받기

### 1. 카카오 개발자 사이트 접속
https://developers.kakao.com/ 접속

### 2. 로그인 및 애플리케이션 생성
1. 카카오 계정으로 로그인
2. 상단 메뉴에서 **"내 애플리케이션"** 클릭
3. **"애플리케이션 추가하기"** 버튼 클릭
4. 앱 이름 입력 (예: "자비정사 웹사이트")
5. 회사명은 선택사항 (입력 안 해도 됨)
6. 저장 클릭

### 3. JavaScript 키 복사
1. 생성된 앱을 클릭
2. **"앱 키"** 탭에서 **"JavaScript 키"** 복사
3. 메모장에 잘 저장해두세요!

### 4. 플랫폼 등록 (중요! ⚠️)
1. 좌측 메뉴에서 **"플랫폼"** 클릭
2. **"Web 플랫폼 등록"** 클릭
3. 사이트 도메인 등록:
   - 로컬 테스트용: `http://localhost`
   - GitHub Pages용: `https://<username>.github.io`
   - 커스텀 도메인이 있다면 해당 도메인 추가
4. 저장

## 📌 2단계: API 키 적용하기

### index.html 파일 수정

`index.html` 파일 하단 근처에 있는 다음 코드를 찾으세요:

```html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_JAVASCRIPT_KEY_HERE"></script>
```

**YOUR_JAVASCRIPT_KEY_HERE**를 1단계에서 복사한 JavaScript 키로 변경하세요.

예시:
```html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1234567890abcdef1234567890abcdef"></script>
```

## 📌 3단계: 실제 좌표 설정하기

### 자비정사의 정확한 좌표 찾기

1. https://map.kakao.com 접속
2. "서울특별시 강북구 삼각산로 5" 검색
3. 정확한 위치를 찾아서 클릭
4. 주소 아래에 나오는 **좌표** 확인
   - 형식: 위도(Latitude), 경도(Longitude)
   - 예: 37.6565, 127.0135

### script.js 파일 수정

`script.js` 파일에서 다음 부분을 찾아서 실제 좌표로 변경하세요:

**157번째 줄 근처:**
```javascript
center: new kakao.maps.LatLng(37.6565, 127.0135), // 임시 좌표 - 실제 좌표로 변경 필요
```

**165번째 줄 근처:**
```javascript
const markerPosition = new kakao.maps.LatLng(37.6565, 127.0135); // 임시 좌표
```

**188번째 줄 근처:**
```javascript
window.open('https://map.kakao.com/link/map/자비정사,37.6565,127.0135');
```

세 곳 모두 실제 좌표로 변경하세요!

## 📌 4단계: 테스트하기

### 로컬에서 테스트

1. 웹 브라우저로 `index.html` 파일 열기
2. "오시는 길" 섹션으로 스크롤
3. 지도가 제대로 표시되는지 확인
4. 마커에 마우스를 올려보세요 (인포윈도우 표시)
5. 마커를 클릭해보세요 (카카오맵 앱/웹으로 이동)

### 문제 해결

**지도가 안 보이고 "카카오맵 API 키를 설정해주세요" 메시지가 나오는 경우:**
- API 키를 제대로 입력했는지 확인
- 플랫폼 도메인을 등록했는지 확인
- 브라우저 콘솔(F12)에서 에러 메시지 확인

**지도는 보이는데 위치가 이상한 경우:**
- 좌표를 정확히 입력했는지 확인
- 위도/경도 순서가 바뀌지 않았는지 확인

## 📌 5단계: GitHub Pages 배포

API 키 설정이 완료되면 GitHub에 푸시하세요:

```bash
git add .
git commit -m "카카오맵 API 추가"
git push origin main
```

GitHub Pages 설정에서 등록한 도메인이 카카오 개발자 플랫폼에도 등록되어 있는지 확인하세요!

## 🎯 추가 커스터마이징

### 지도 확대 레벨 조정

`script.js`의 158번째 줄:
```javascript
level: 3 // 숫자가 작을수록 확대 (1~14)
```

### 마커 스타일 변경

커스텀 마커 이미지를 사용하려면:
```javascript
const imageSrc = 'images/marker.png'; // 마커이미지 주소
const imageSize = new kakao.maps.Size(64, 69); // 마커이미지 크기
const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커 좌표에 일치시킬 이미지 안의 좌표

const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
    map: map
});
```

### 인포윈도우 내용 변경

`script.js`의 172~174번째 줄:
```javascript
const infowindow = new kakao.maps.InfoWindow({
    content: '<div style="padding:10px;font-size:14px;font-weight:bold;color:#8B4513;">자비정사</div>'
});
```

HTML을 수정하여 원하는 스타일로 변경할 수 있습니다.

## 📚 참고 자료

- [카카오맵 API 공식 문서](https://apis.map.kakao.com/web/)
- [카카오맵 샘플 예제](https://apis.map.kakao.com/web/sample/)

## ❓ 자주 묻는 질문

**Q: API 키는 무료인가요?**
A: 네! 일일 호출 횟수 제한(300,000회) 내에서 무료로 사용 가능합니다.

**Q: 여러 도메인에서 사용할 수 있나요?**
A: 네! 플랫폼 설정에서 여러 도메인을 등록할 수 있습니다.

**Q: HTTP와 HTTPS 모두 등록해야 하나요?**
A: 네! 각각 별도로 등록해야 합니다.
- `http://localhost`
- `https://yourusername.github.io`

---

문제가 있거나 추가 도움이 필요하시면 [카카오 개발자 포럼](https://devtalk.kakao.com/)을 참고하세요! 🙏

