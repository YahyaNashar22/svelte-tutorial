class GlobalState {
	theme = $state('dark');

	toggleTheme() {
		this.theme = this.theme === 'light' ? 'dark' : 'light';
	}
}

export const globalState = new GlobalState();
