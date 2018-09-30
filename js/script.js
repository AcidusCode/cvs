const animatedScroll = () => {
	let elems = document.querySelectorAll('.animated')
	let arrayElems = Array.from(elems)
	let delay = 0.3

	for(let i = 0; i < arrayElems.length; i++){
		
		let coor = arrayElems[i].getBoundingClientRect()
		let t = coor.top

		let elemsClass = arrayElems[i].classList.contains('listed')

		if( t <= window.innerHeight) {

			if( !elemsClass ){
				arrayElems[i].style.animationDelay = delay + 's'
				console.log(`Delay: ${delay}`)
				arrayElems[i].classList.toggle('flipInX', true)
				arrayElems[i].classList.add('listed')
				delay += 0.3
			}

		}

	}
}

animatedScroll()

window.addEventListener('scroll', function(){
	animatedScroll()	
})