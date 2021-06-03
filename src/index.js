import {firstPage, menuPage, contactPage} from "./page-load.js"

const homebtn = document.getElementById("homebutton");
const menubtn = document.getElementById("menubutton");
const contactbtn = document.getElementById("contactbutton");
let currentbtn = homebtn
homebtn.classList.toggle("currentbutton")

homebtn.addEventListener("click", function() {
  if (currentbtn != homebtn) {
    firstPage();
    currentbtn.classList.toggle("currentbutton")
    currentbtn = homebtn;
    currentbtn.classList.toggle("currentbutton")
  }
});
menubtn.addEventListener("click", function() {
  if (currentbtn != menubtn) {
    menuPage();
    currentbtn.classList.toggle("currentbutton")
    currentbtn = menubtn;
    currentbtn.classList.toggle("currentbutton")
  }
});
contactbtn.addEventListener("click", function() {
  if (currentbtn != contactbtn) {
    contactPage();
    currentbtn.classList.toggle("currentbutton")
    currentbtn = contactbtn;
    currentbtn.classList.toggle("currentbutton")
  }
});

firstPage();
