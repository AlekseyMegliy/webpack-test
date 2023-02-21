import _ from "lodash";
import head from "./header.js";
import foot from "./footer.js";

const header = document.createElement("header");
header.innerHTML = head;

const element = document.createElement("div");
element.innerHTML = _.join(["I am", "index"], " ");

const footer = document.createElement("footer");
footer.innerHTML = foot;

document.body.appendChild(header);
document.body.appendChild(element);
document.body.appendChild(footer);
