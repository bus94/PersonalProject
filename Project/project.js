// 반응형 토글버튼 관련 함수
const toggleBtn = document.querySelector('.header_toggleBtn');
const menu = document.querySelector('.header_menu');

toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// // OpenWeatherMap API에 필요한 정보
// const API_KEY = 'feffcb3a3f3c872ae7ddb0fa1d617371';
// const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

// // 화면에 표시될 날씨 상태의 이름
// const stateName = [
//   '현재 온도',
//   '체감 온도',
//   '최저 기온',
//   '최고 기온',
//   '기압',
//   '습도',
// ];

// const clouds = document.getElementById('clouds');
// const wind = document.getElementById('wind');
// const description = document.getElementById('description');
// const img = document.getElementById('weatherIcon');
// const area = document.getElementById('area');
// const weatherData = document.querySelectorAll('[weatherData]');

// // API로부터 날씨 데이터를 받아와 각 요소에 해당하는 데이터를 할당하고 표시
// async function getWeather(url) {
//   await fetch(url)
//     .then((response) => response.json()) // 가져온 데이터를 json 형태로 변환 
//     .then((data) => {
//       const weatherMain = data.main;
//       const stateData = Object.values(weatherMain);
//       weatherData.forEach((item, idx) => {
//         item.innerHTML = `${stateName[idx]}: ${stateData[idx]}`;
//       });

//       area.innerText = `검색 지역: ${data.name}`;
//       clouds.innerText = `흐림 정도: ${data.clouds.all}%`;
//       wind.innerText = `풍속: ${data.wind.speed}m/s`;
//       description.innerText = `전체적인 날씨: ${data.weather[0].description}`;

//       // 날씨 아이콘 이미지의 url
//       const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//       img.src = url;
//     });
// }

// // 사용자가 검색한 도시을 추가하기 위
// function getWeatherUrl(city, key = API_KEY) {
// // 끝에 &lang=kr를 사용하여 응답받은 데이터 일부 번역
//   return `${BASE_URL}?q=${city}&appid=${key}&units=metric&lang=kr`;
// }

// // 웹 페이지가 로드될 때 실행되는 함수, 기본값 서울
// window.onload = function () {
//   getWeather(getWeatherUrl('seoul'));
// };

// // 사용자가 입력한 도시 이름을 이용해 해당 도시의 날씨 정보를 가져옴
// function search() {
//   const cityName = document.querySelector('#cityName').value;
//   getWeather(getWeatherUrl(cityName));
//   document.querySelector('#cityName').value = null;
// }

// const input = document.querySelector('#cityName');
// input.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') { // 사용자가 엔터 키를 누르면,
//     event.preventDefault();
//     search(); // search 함수를 호출
//   }
// });

// Openweathermap
// api 키: feffcb3a3f3c872ae7ddb0fa1d617371
// 사용방법 출처: https://velog.io/@imfruin95/JavaScript-API-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EB%82%A0%EC%94%A8-%EC%A0%95%EB%B3%B4-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0

// 날씨 Description
// 1) clear sky: 맑음
// 2) few clouds: 구름 조금
// 3) scattered clouds: 
// 4) broken clouds: 온흐림, 튼구름
// 9) shower rain: 소나기
// 10) rain: (비) 실 비, 보통 비
// 11) thunderstorm: 번개
// 13) snow: 눈
// 50) mist: 안개