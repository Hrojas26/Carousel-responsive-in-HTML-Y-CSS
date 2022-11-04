		
		
		
		//
		
		const li		= document.querySelectorAll('.li')
		const bloque    = document.querySelectorAll('.bloque')

		//CLICK IN LI PARA QUITAR LA CLASE ACTIVA
			

		li.forEach( (cadali , i )=>{
			li[i].addEventListener('click',()=>{

				li.forEach(( cadali , i )=>{
					li[i].classList.remove('activo')
					bloque[i].classList.remove('activo')
				})

				li[i].classList.add('activo')
				bloque[i].classList.add('activo')
			})


		})




 // TODO PARA EL RESPONSIVE Y GLIDER CAROUSEL
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		
		

		slidesToShow: 4,
		slidesToScroll: 4,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 760px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  }
			}
		]
	});
});