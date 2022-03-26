class GitHub {
	constructor() {
		this.client_id = '168660149e71145f4471',
		this.client_secret = '2fbab3b5098b5144345f6ca9f5a59041aeb1402b'
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile = await profileResponse.json();

		return {
			profile: profile
		}
	}
}