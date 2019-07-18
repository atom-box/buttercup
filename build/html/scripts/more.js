console.log(`portfolio javascript!`);

// function stretchVerbiage (s){
// 	// @param The string to insert to the web page
// 	// @return nothing
// 	console.log(`This is ${this}`);
// 	var elShort = document.getElementById('short001');
// 	elShort.innerHTML = "Hey, I'm Zorak."
// }

// function tersifyVerbiage (s){
// 	console.log(`This is ${this}`);
// }

var el001 = document.getElementById('text001');

el001.addEventListener('click', function(){
	console.log(`What is in the attic before: ${this.getAttribute('attic')}`)
	var temp = el001.innerHTML;
	el001.innerHTML = el001.getAttribute("attic");
	el001.setAttribute('attic', temp);
	console.log(`What is in the attic after: ${this.getAttribute('attic')}`)


}); // todo MAKE THIS 'THIS'



// if (button.getAttribute("data-text-swap") == button.innerHTML) {
//     button.innerHTML = button.getAttribute("data-text-original");
//   } else {
//     button.setAttribute("data-text-original", button.innerHTML);
//     button.innerHTML = button.getAttribute("data-text-swap");
//   }