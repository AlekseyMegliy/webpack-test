import "./styles/page2.scss";

const link = document.createElement("a");
link.innerHTML = "Back to index";
link.setAttribute("href", "./index.html");
link.classList.add("back");
document.body.appendChild(link);
