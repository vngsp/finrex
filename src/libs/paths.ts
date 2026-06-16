const page = {
	login: '/login',
	home: '/insights',
	revenue: '/revenue',
	goals: '/goals',
	profit: '/profit',
	insights: '/insights',
};

const api = {
	auth: {
		login: '/login-users/login',
		register: '/login-users/register',
	},
	revenue: '/revenue',
	profile: '/profile-data',
	transaction: {
		incomes: '/financial-transactions/incomes',
		spendings: '/financial-transactions/spendings',
	},
};

export const paths = { page, api };
