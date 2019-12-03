// Hide hero image after scroll
let scrollPos = 0; // Initial State

// Add scroll event
window.addEventListener("scroll", function() {
  // add target element
	const elementTarget = document.getElementById("heroBG");
		// detects if we are scrolling down
	if ((document.body.getBoundingClientRect()).top < scrollPos) 	
		// and adds background class
		elementTarget.classList.add("white_background");
	else
		// if we are scrolling up remove background class
		elementTarget.classList.remove("white_background");
	//saves the new state	
	scrollPos = (document.body.getBoundingClientRect()).top;
});


// Lazy Load images
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'XXXXXXXXXXX');
ga('set', 'anonymizeip', true);



