
//Добавляем прослушку на всем окне 
window.addEventListener('click', function(event) {

	// Проверка нажатие на кнопку +
	if (event.target.dataset.action === 'plus') {
		// Ищем родителя 
		const counterWrapper = event.target.closest('.item__wrapper-chose__quantity');
		//Уже в родителе нажатой кнопки ищем счетчик
		const counter = counterWrapper.querySelector('[data-counter]');
		counter.innerText = ++counter.innerText;
	}

	// Проверка нажатие на кнопку -
	if (event.target.dataset.action === 'minus') {
		// Ищем родителя
		const counterWrapper = event.target.closest('.item__wrapper-chose__quantity');
		//Уже в родителе нажатой кнопки ищем счетчик
		const counter = counterWrapper.querySelector('[data-counter]');
		//Проверяем чтобы счетчик был > 1
		if  ( parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		}
	}

});












































///Для одного товара 

// // Находим елементы на странице 
// const btnMinus = document.querySelector('.minus');
// const btnPlus = document.querySelector('.plus');

// const counter = document.querySelector('[data-counter]');

// //Отслеживаем клик на кнопку -
// btnMinus.addEventListener('click', function(){

// 	//Проверяем чтобы счетчик был > 1
// 	if  ( parseInt(counter.innerText) > 1) {
// 		counter.innerText = --counter.innerText;
// 	}
	
// });

// //Отслеживаем клик на кнопку +

// btnPlus.addEventListener('click', function(){
// 	 
// });