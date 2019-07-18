console.log(`portfolio javascript!`);

// function stretchVerbiage (s){
// 	// @param The string to insert to the web page
// 	// @return nothing
// 	console.log(`This is ${this}`);
// 	var elShort = document.getElementById('short001');
// 	elShort.innerHTML = "Hey, I'm Zorak."
// }

function tersifyVerbiage (s){
	console.log(`This is ${this}`);
}

var el001 = document.getElementById('text001');

el001.addEventListener('click', function(){
	console.log(`${this.attic}`);
	var temp = this.getAttribute("attic");
	this.attic = this.innerHTML;
	this.innerHTML = temp;

})



// if (button.getAttribute("data-text-swap") == button.innerHTML) {
//     button.innerHTML = button.getAttribute("data-text-original");
//   } else {
//     button.setAttribute("data-text-original", button.innerHTML);
//     button.innerHTML = button.getAttribute("data-text-swap");
//   }