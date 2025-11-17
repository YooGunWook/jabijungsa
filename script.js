// 햄버거 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // 햄버거 아이콘 애니메이션
    hamburger.classList.toggle('active');
});

// 네비게이션 링크 클릭시 메뉴 닫기
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 스크롤시 네비게이션 바 스타일 변경
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 네비게이션 바 높이만큼 오프셋
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer를 사용한 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소들 관찰
const animateElements = document.querySelectorAll('.about-content, .greeting-content, .program-card, .gallery-item, .location-content');

animateElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// 갤러리 이미지 클릭시 모달로 확대 (간단한 버전)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // 실제 구현시에는 Lightbox 라이브러리 사용 권장
        alert('실제 배포시 이미지를 추가하고 Lightbox 기능을 구현하세요.');
    });
});

// 페이지 로드시 애니메이션
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// 현재 섹션 하이라이트
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 프로그램 카드 호버 효과 강화
const programCards = document.querySelectorAll('.program-card');

programCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 페이지 새로고침시 맨 위로 스크롤
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// 카카오맵 초기화
function initKakaoMap() {
    // 카카오맵 API가 로드되었는지 확인
    if (typeof kakao === 'undefined') {
        console.error('카카오맵 API가 로드되지 않았습니다. API 키를 확인해주세요.');
        return;
    }

    const mapContainer = document.getElementById('map');
    
    // 지도가 표시될 div가 없으면 종료
    if (!mapContainer) {
        return;
    }

    // 자비정사 위치 (서울특별시 강북구 삼각산로 5)
    // 실제 좌표를 확인하여 수정하세요
    const mapOption = {
        center: new kakao.maps.LatLng(37.6565, 127.0135), // 임시 좌표 - 실제 좌표로 변경 필요
        level: 3 // 지도 확대 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(37.6565, 127.0135); // 임시 좌표
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map
    });

    // 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:10px;font-size:14px;font-weight:bold;color:#8B4513;">자비정사</div>'
    });

    // 마커에 마우스오버 이벤트 등록
    kakao.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(map, marker);
    });

    // 마커에 마우스아웃 이벤트 등록
    kakao.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
    });

    // 마커 클릭시 카카오맵 앱/웹으로 길찾기
    kakao.maps.event.addListener(marker, 'click', function() {
        window.open('https://map.kakao.com/link/map/자비정사,37.6565,127.0135');
    });
}

// 페이지 로드 완료 후 지도 초기화
window.addEventListener('load', function() {
    // 카카오맵 API 로드를 기다림
    if (typeof kakao !== 'undefined' && kakao.maps) {
        kakao.maps.load(function() {
            initKakaoMap();
        });
    } else {
        // API 키가 없을 때 임시 메시지 표시
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#f5f5f5; border-radius:10px;">
                    <p style="font-size:3rem;">🗺️</p>
                    <p style="color:#666; margin-top:1rem;">카카오맵 API 키를 설정해주세요</p>
                    <p style="color:#999; font-size:0.9rem; margin-top:0.5rem;">index.html에서 YOUR_JAVASCRIPT_KEY_HERE를 실제 키로 변경</p>
                </div>
            `;
        }
    }
});

