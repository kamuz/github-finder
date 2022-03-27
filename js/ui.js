class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}

	// Show profile
	showProfile(user) {
		console.log(user);
		this.profile.innerHTML = `
		<div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid img-thumbnail w-100 mb-2" src="${user.avatar_url}">
					<div class="d-grid">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
					</div>
				</div>
				<div class="col-md-9">
					<h2>${user.name}</h2>
					<span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
					<span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
					<span class="badge bg-success">Followers: ${user.followers}</span>
					<span class="badge bg-info">Followers: ${user.following}</span>
					<ul class="list-group mt-3">
						<li class="list-group-item">Company: ${user.company}</li>
						<li class="list-group-item">Website: ${user.blog}</li>
						<li class="list-group-item">Location: ${user.location}</li>
						<li class="list-group-item">Member Since: ${user.created_at}</li>
					</ul>
				</div>
			</div>
		</div>
		<h3 class="page-heading mb-3">Latest Repos</h3>
		<div id="repos"></div>
		`;
	}

	// Show alert
	showAlert(message, className) {
		// Clear alert
		this.clearAlert();
		// Create div
		const div = document.createElement('div');
		// Add class name
		div.className = className;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get parent
		const container = document.getElementById('search-container');
		// Get search box
		const search = document.querySelector('.search');
		// Insert alert
		container.insertBefore(div, search);
		// Clear alert after 2s
		setTimeout(() => this.clearAlert(), 2000);
	}

	// Clear additional alerts
	clearAlert() {
		const alert = document.querySelector('.alert');
		if (alert) {
			alert.remove();
		}
	}

	// Clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}
}