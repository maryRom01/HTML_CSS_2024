"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

const container = document.querySelector('.trainers-cards__container');
const sortingPanel = document.querySelector('.sorting');
const submitFilters = document.querySelector('.filters__submit');
let currentDATA = [...DATA];

function renderCards(data) {
	container.innerHTML = '';
	console.log(data);
	if (!container) {
        console.error('Контейнер для карток тренерів не знайдено');
        return;
    }
	const template = document.getElementById('trainer-card');
	if (!template) {
        console.error('Шаблон картки тренера не знайдено');
        return;
    }

	let counter = 0;

	data.forEach(dataElement => {
		const card = template.content.cloneNode(true);
		card.id = `trainer-card-${counter++}`;
		card.querySelector('li').id = card.id;
		card.querySelector(".trainer__name").textContent = `${dataElement["first name"]} ${dataElement["last name"]}`;
		card.querySelector("img").src = dataElement.photo;
		container.appendChild(card);
	});
};

function displaySorting() {
	const sorting = document.querySelector('.sorting');
	sorting.removeAttribute('hidden');
}

function displaySidebarFilters() {
	const sidebarFilters = document.querySelector('.sidebar');
	sidebarFilters.removeAttribute('hidden');
}

function displayModal(dataSet) {
	const modal = document.getElementById('modal-template');
	const cardModal = modal.content.cloneNode(true);

	cardModal.querySelector(".modal__name").textContent = `${dataSet["first name"]} ${dataSet["last name"]}`;
	cardModal.querySelector("img").src = dataSet.photo;
	cardModal.querySelector(".modal__point--category").textContent = `Категорія: ${dataSet.category}`;
	cardModal.querySelector(".modal__point--experience").textContent = `Досвід: ${dataSet.experience}`;
	cardModal.querySelector(".modal__point--specialization").textContent = `Напрям тренера: ${dataSet.specialization}`;
	cardModal.querySelector(".modal__text").textContent = `${dataSet.description}`;

	container.appendChild(cardModal);
	disableScroll();

	const closeModal = document.querySelector('.modal__close');
	closeModal.addEventListener('click', (event) => {
		console.log(event.target);
		const modalToRemove = document.querySelector('.modal');
		container.removeChild(modalToRemove);
		enableScroll();
	})	
}

function disableScroll() {
	document.body.style.overflow = 'hidden'; 
}

function enableScroll() {
	document.body.style.overflow = ''; 
}

document.addEventListener('DOMContentLoaded', () => {
	renderCards(DATA);
	displaySorting();
	displaySidebarFilters();
});

container.addEventListener('click', (event) => {
	const elemTarget = event.target;
	if (elemTarget.classList.contains('trainer__show-more')) {
		//console.log(elemTarget);
		const parentCard = elemTarget.closest('.trainer');
		//console.log(parentCard);
		const parentCardId = parentCard.id.split('-')[2];
		//console.log(parentCardId);
		const dataSet = currentDATA[parentCardId];
		displayModal(dataSet);
	};
});

function sortByDefault() {
	renderCards(DATA);
	currentDATA = [...DATA];
	resetFilters();
}

function sortByLastName() {
	const dataByLastName = [...DATA];
	dataByLastName.sort((a, b) => a['last name'].localeCompare(b['last name']));
	renderCards(dataByLastName);
	currentDATA = [...dataByLastName];
	resetFilters();
}

function sortByExperience() {
	const dataByExperience = [...DATA];
	dataByExperience.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
	renderCards(dataByExperience);
	currentDATA = [...dataByExperience];
	resetFilters();
}

function filterData() {
	currentDATA = [...DATA];
	let selectedDirection = document.querySelector('input[name="direction"]:checked').value;
  	let selectedCategory = document.querySelector('input[name="category"]:checked').value;
	switch(selectedDirection) {
		case 'gym': 			selectedDirection = 'Тренажерний зал'; break;
		case 'fight club': 		selectedDirection = 'Бійцівський клуб'; break;
		case 'kids club': 		selectedDirection = 'Дитячий клуб'; break;
		case 'swimming pool': 	selectedDirection = 'Басейн'; break;
		case 'all': 			selectedDirection = 'all'; break;
		default: console.error('Error in switch/case filterData()');
	}
	switch(selectedCategory) {
		case 'master': 			selectedCategory = 'майстер'; break;
		case 'specialist': 		selectedCategory = 'спеціаліст'; break;
		case 'instructor': 		selectedCategory = 'інструктор'; break;
		case 'all': 			selectedCategory = 'all'; break;
		default: console.error('Error in switch/case filterData()');
	}
	// console.log(selectedDirection);
	// console.log(selectedCategory);
  	const filteredTrainers = [...currentDATA].filter(trainer => {
    const matchesDirection = selectedDirection === 'all' || trainer.specialization === selectedDirection;
    const matchesCategory = selectedCategory === 'all' || trainer.category === selectedCategory;
    	return matchesDirection && matchesCategory;
  	});
	console.log(filteredTrainers);
	renderCards(filteredTrainers);
	currentDATA = [...filteredTrainers];
}

function resetFilters() {
	const sidebarFilters = document.querySelector('.sidebar__filters');
	sidebarFilters.reset(); 
}

sortingPanel.addEventListener('click', (event) => {
	const elemTarget = event.target;
	const activeButton = sortingPanel.querySelectorAll('.sorting__btn--active');
	activeButton.forEach(button => {
		button.classList.remove('sorting__btn--active');
	})
	elemTarget.classList.add('sorting__btn--active');
	const buttonName = elemTarget.textContent.trim().toLowerCase();
	console.log(buttonName);
	switch(buttonName) {
		case 'за прізвищем': sortByLastName(); break;
		case 'за досвідом': sortByExperience(); break;
		case 'за замовчуванням': sortByDefault(); break;
		default: console.error('Error in switch/case for sortingPanel');
	}
})

submitFilters.addEventListener('click', (event) => {
	event.preventDefault();
	filterData();
})


