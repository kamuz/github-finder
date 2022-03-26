// Init GitHub
const github = new GitHub;
// Search input
const searchInput = document.getElementById('search-user');

// Search input event listener
searchInput.addEventListener('keyup', (e) => {
	// Get input text
	const userText = e.target.value;

	// Text input is not empty
	if (userText !== '') {
		github.getUser(userText)
			.then(data => {
				console.log(data);
				// User not found
				if ( data.profile.message === 'Not Found' ) {
					// Show alert
				} else {
					// Show profile
				}
			});
	} else {
		// Clear profile UI
	}
});