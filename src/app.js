// Import $ for use JQuery
import $ from 'jquery';

// Files Js Popper use for bootstrap
import 'popper.js';

// Files Js framework bootstrap
import 'bootstrap';

// Css efects 
import AOS from 'aos'

// Custom onw style
import './scss/app.scss';

// Tnit AOS efects css
AOS.init({
	easing: 'ease-in-out-sine'
});

// Init to use Hamgurguer menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
forEach(hamburgers, function(hamburger) {
  hamburger.addEventListener("click", function() {
	this.classList.toggle("is-active");
  }, false);
});
}

// Inlcude scripts to popover, tooltips and scrollspy
import './js/ui.js';

// Own code
console.log('Hello World...');