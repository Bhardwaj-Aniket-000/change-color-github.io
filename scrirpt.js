let body = document.querySelector("body");
console.log(body);
let button = document.querySelectorAll(".color-button");

const change_color = () => {
	let random_color = "0123456789abcdef";
	// let random = Math.floor(Math.random() * 16);
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += random_color[Math.floor(Math.random() * 16)];
		// color += random_color[random];
	}
	return color;
};

let timing;
button[0].addEventListener("click", () => {
	timing = setInterval(() => {
		body.style.backgroundColor = change_color();
	}, 1000);
});
button[1].addEventListener("click", () => {
	clearInterval(timing);
});
