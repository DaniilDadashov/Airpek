const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
	element.addEventListener('click', open)
})

function open(evt) {
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;

	tabItem.forEach(function(item){
		item.classList.remove('tabs__btn-item--active')
	})
	
	tabTarget.classList.add('tabs__btn-item--active')

	tabContent.forEach(function(item){
		item.classList.remove('tabs__content-item--active')
	});

	document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

//!!!!!!!!!!!!!!!

const accordionContent = document.querySelectorAll(".accordion__content");

accordionContent.forEach((item, index) => {
	let header = item.querySelector(".accordion__header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");
		
        let description = item.querySelector(".accordion__description");        
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;

        }else{
            description.style.height = "0px";
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
			
            let des = item2.querySelector(".accordion__description");
            des.style.height = "0px";
        }
    })
}

//!!!!!!!!!!!!!!!

const openModal = document.getElementById("open-modal");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const wert = document.querySelector(".wert");

openModal.addEventListener('click', function(e){
	e.preventDefault();
	modal.classList.add("modal-open");
})

modalClose.addEventListener('click', () => {
	modal.classList.remove("modal-open");
})

//!!!!!!!!!!!!!!!

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const charAcc = document.querySelector('.card__characteristics-title');
const cardChar = document.querySelector('.card__characteristics-items');

charAcc.addEventListener('click', function(){
	charAcc.classList.toggle('open');
	cardChar.classList.toggle('open');
})

headerBurger.addEventListener('click', function(){
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
})

//!!!!!!!!!!!!!!!

let center = [55.609355, 37.623564];

function init() {
	let map = new ymaps.Map('imap', {
		center: center,
		zoom: 13,
	}, {
		suppressMapOpenBlock: true
	});

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: './images/icon/marker.svg',
		iconImageSize: [48, 48],
		iconOffset: [-15, -10]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	
	map.geoObjects.add(placemark);
}
ymaps.ready(init);

//!!!!!!!!!!!!!!!

$(function(){
	$('.popup__link').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.card__photo-gallery').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/prev.svg" alt="#"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.svg" alt="#"></button>',
		infinite: false,
		dots: true,
		speed: 300,
		fade: true,
		cssEase: 'linear'
	});
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	freeMode: true,
	// slidesPerView: 1,

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});