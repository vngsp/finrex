const resolveCssColor = (cssVarString: string): string => {
	if (!cssVarString?.startsWith('var(')) {
		return cssVarString;
	}
	try {
		const varNameMatch = cssVarString.match(/--[\w-]+/);
		if (varNameMatch) {
			const varName = varNameMatch[0];
			if (typeof window !== 'undefined' && document.documentElement) {
				const computedValue = window
					.getComputedStyle(document.documentElement)
					.getPropertyValue(varName)
					.trim();
				return computedValue || cssVarString;
			}
		}
	} catch (e) {
		console.error('Error: ', e);
		return cssVarString;
	}
	return cssVarString;
};

export default resolveCssColor;
