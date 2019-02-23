// Import $ for use JQuery
import $ from 'jquery';

// Scrollspy menu bootstrap
$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function () {
      // Add hash to URL after scroll
      window.location.hash = hash;
    });
  }
});
		
// Init Popover
$('[data-toggle="popover"]').popover();


window.showPopover = function () {
	$('#hello').popover('show');
}

window.hidePopover = function () {
	$('#hello').popover('hide');
}

window.togglePopover = function () {
	$('#hello').popover('toggle');
}

// Popover events
$('#hello').on('show.bs.popover', function () {
	console.log('Popover show');
});

$('#hello').on('shown.bs.popover', function () {
	console.log('Popover shown');
});

$('#hello').on('hide.bs.popover', function () {
	console.log('Popover hide');
});

$('#hello').on('hidden.bs.popover', function () {
	console.log('Popover hidden');
});

// Init tooltips
$('[data-toggle="tooltip"]').tooltip();

window.showTooltip = function () {
	$('#hello').tooltip('show');
}

window.hideTooltip =function () {
	$('#hello').tooltip('hide');
}

window.toggleTooltip = function () {
	$('#hello').tooltip('toggle');
}

// Tooltip Events
$('#hello').on('show.bs.tooltip', function () {
	console.log('Tooltip Show');
});

$('#hello').on('shown.bs.tooltip', function () {
	console.log('Tooltip Shown');
});

$('#hello').on('hide.bs.tooltip', function () {
	console.log('Tooltip Hide');
});

$('#hello').on('hidden.bs.tooltip', function () {
	console.log('Tooltip Hidden');
});