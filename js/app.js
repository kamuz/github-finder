// Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

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
				// User not found
				if ( data.profile.message === 'Not Found' ) {
					// Show alert
					ui.showAlert('User not found', 'alert alert-danger');
				} else {
					// Show profile
					ui.showProfile(data.profile);
					// Show repos
					ui.showRepos(data.repos);
				}
			});
	} else {
		// Clear profile UI
		ui.clearProfile();
	}
});