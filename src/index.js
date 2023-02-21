import _ from "lodash";
import head from "./header.js";
import foot from "./footer.js";

const header = document.createElement("header");
header.innerHTML = head;

const element = document.createElement("div");
element.innerHTML = _.join(["I am", "index"], " ");

const footer = document.createElement("footer");
footer.innerHTML = foot;

const link = document.createElement("a");
link.innerHTML = "Page 2";
link.setAttribute("href", "./page2.html");

document.body.appendChild(header);
document.body.appendChild(element);
document.body.appendChild(link);
document.body.appendChild(footer);
