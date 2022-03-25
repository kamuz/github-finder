// Search input
const searchInput = document.getElementById('search-user');

// Search input event listener
searchInput.addEventListener('keyup', (e) => {
	// Get input text
	const userText = e.target.value;

	// Text input is not empty
	if (userText !== '') {
		console.log(userText);
	}
});