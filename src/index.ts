import { formData } from "./forms";
import "./main.scss";

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = formData(form);
	console.log(data);
});
