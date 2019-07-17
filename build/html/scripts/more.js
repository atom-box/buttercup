console.log(`portfolio javascript!`);

function stretchVerbiage (s){
	// @param The string to insert to the web page
	// @return nothing
	console.log(`This is ${this}`);
	var elShort = document.getElementById('short001');
	elShort.innerHTML = "Hey, I'm Zorak."

}

function tersifyVerbiage (s){
	console.log(`This is ${this}`);
}

document.getElementById('swappable002').addEventListener('click', function(){
	console.log(`Tomorrow never knows.`);
	this.attic = this.innerHTML;
	this.innerHTML = "Drive My Car";

})

if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }