class GitHub {
	constructor() {
		this.repos_count = 5;
		this.repos_sort = 'created';
		this.repos_direction = 'desc';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}`);
		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&direction=${this.repos_direction}`);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
			profile: profile,
			repos: repos,
		}
	}
}