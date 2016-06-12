
export function query(selector) {
	return <HTMLElement>document.querySelector(selector);
};

export function onclick(selector, action) {
	let button = document.querySelector(selector);
	button.addEventListener("click", action, false);
};

export function log(...items: any[]) {
	console.log.apply(console, items);
};
