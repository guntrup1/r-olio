const cartWrapper = document.querySelector('.basket__content-items');
const cartProductsList = document.querySelector('.basket__content');


window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.item__wrapper');

		const productsInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.photo-oil__basket').getAttribute('src'),
			title: card.querySelector('.item__wrapper-title').innerText,
			counter: card.querySelector('[data-counter]').innerText,
			
		}

		let cardPrice = parseInt(productsInfo.counter) * 115;

		const itemInCart = cartWrapper.querySelector(`[data-id="${productsInfo.id}"]`);



		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			
		} 

		else {

			const cartItemHTML = `
				<div class='basket__content-item' id='basket__content-item'>
					<div class="basket__item" id="basket__item" data-id="${productsInfo.id}">
		  				<div class="basket__item-title">${productsInfo.title}</div>
		 			 	<div class="basket__item-wrapper">
		    				<img class="basket__item-photo" src="${productsInfo.imgSrc}">

		    				<div class="basket__item-btn">
			     				<button class="minus" data-action="minus">-</button>
			      				<div class="volue" data-count>${productsInfo.counter}</div>
			      				<button class="plus" data-action="plus">+</button>
			    			</div>

		    				<div class="basket__item-wrapper-inner">
			    				<div class="basket__item-price">
			      					<div class="price" ><span data-price>${cardPrice}</span> грн</div>
			      					<button class="basket__item-del"><img src="images/contents/basket/items/del__btn.svg"></button>
			   				 	</div>
			   				 </div>
		  				</div>
					</div>
				</div>
			`;


			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);



		}



		
		const deleteProducts = (productParent) => {
			productParent.remove();
		};

		cartProductsList.addEventListener('click', (e) => {
			if (e.target.classList.contains('basket__item-del')) {
				deleteProducts(e.target.closest('.basket__content-item'));
			}	
		});

	}

	


});




document.getElementById('basket__items').addEventListener('click',(event) => {
	
	if (event.target.dataset.action === 'plus') {
		const cartWrapperBasket = event.target.closest('.basket__content-item');
		const basketElPrice = cartWrapperBasket.querySelector('[data-price]');
		basketElPrice.innerText = parseInt(basketElPrice.innerText) + 115;
	}

	if (event.target.dataset.action === 'minus') {
		const cartWrapperBasket = event.target.closest('.basket__content-item');
		const basketElPrice = cartWrapperBasket.querySelector('[data-price]');

		if  ( parseInt(basketElPrice.innerText) > 115) {
			basketElPrice.innerText = parseInt(basketElPrice.innerText) - 115;
		}
	}



});




document.getElementById('basket__items').addEventListener('click',(event) => {
	
	// Проверка нажатие на кнопку +
	if (event.target.dataset.action === 'plus') {
		// Ищем родителя 
		const counterWrapper = event.target.closest('.basket__item-btn');
		//Уже в родителе нажатой кнопки ищем счетчик
		const counters = counterWrapper.querySelector('[data-count]');
		counters.innerText = ++counters.innerText;
	}

	// Проверка нажатие на кнопку -
	if (event.target.dataset.action === 'minus') {
		// Ищем родителя
		const counterWrapper = event.target.closest('.basket__item-btn');
		//Уже в родителе нажатой кнопки ищем счетчик
		const counters = counterWrapper.querySelector('[data-count]');
		//Проверяем чтобы счетчик был > 1
		if  ( parseInt(counters.innerText) > 1) {
			counters.innerText = --counters.innerText;
		}
	}



});
