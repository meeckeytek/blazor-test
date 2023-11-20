

function scrollIntoViewById(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}

function scrollIntoViewByClass(elementClass) {
    document.getElementsByClassName(elementClass)[0].scrollIntoView({ behavior: 'smooth' });
}

function addElementVisibilityDetectorListener(querySelector, instance, partiallyVisibleCallback, fullyVisibleCallback) {
	document.body.addEventListener('scroll', function () {
		var element = document.querySelector(querySelector);
		var position = element.getBoundingClientRect();
		// checking whether fully visible
		if (position.top >= 0 && position.bottom <= window.innerHeight) {
			instance.invokeMethodAsync(fullyVisibleCallback, querySelector);
		}

		// checking for partial visibility
		if (position.top < window.innerHeight && position.bottom >= 0) {
			instance.invokeMethodAsync(partiallyVisibleCallback, querySelector);
		}
	}, false);
}