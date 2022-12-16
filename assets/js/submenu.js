const toggleSubMenu = () => {
	const navItem = document.querySelectorAll('.nav-link');
	navItem.forEach(itemAs => {
		itemAs.addEventListener('click' , () => {
			itemAs.nextElementSibling.classList.toggle('display-block');
		})
	})
}
toggleSubMenu();