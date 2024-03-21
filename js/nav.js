const dropdownKey = document.querySelector('.dropdown');
const rootNav = document.querySelector('.block');

dropdownKey.addEventListener('mouseover', () => {
	if (rootNav.classList.contains('.block') === true) {
		rootNav.classList.remove('.block');
	} else {
		rootNav.classList.add('.block')
	}
})