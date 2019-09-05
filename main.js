/* CURSOR */
var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 5) + "px; left: " + (e.pageX - 5) + "px"
  );
});

/* ABOUT DIV */
var aboutHeading = document.getElementById("about-title");

var aboutDiv = document.getElementById("about");

aboutHeading.onmouseover = function() {
  document.getElementById("about-info").style.display = "block";
};

aboutDiv.onmouseleave = function() {
  document.getElementById("about-info").style.display = "";
};

/* WORK DIV */
var workHeading = document.getElementById("work-title");

var workDiv = document.getElementById("work");

workHeading.onmouseover = function() {
  document.getElementById("work-info").style.display = "block";
};

workDiv.onmouseleave = function() {
  document.getElementById("work-info").style.display = "";
};

/* WORK DIV */
var contactsHeading = document.getElementById("contacts-title");

var contactsDiv = document.getElementById("contacts");

contactsHeading.onmouseover = function() {
  document.getElementById("contacts-info").style.display = "block";
};

contactsDiv.onmouseleave = function() {
  document.getElementById("contacts-info").style.display = "";
};

var image = document.getElementById("img-content");

/* Rounded Table */
var roundedTable = document.getElementById("rounded-table");

roundedTable.onmouseover = function() {
  image.setAttribute("src", "img/roundedTable.jpg");
};

roundedTable.onmouseout = function() {
  image.setAttribute("src", "");
};

/* Wobbly Chair */
var wobblyChair = document.getElementById("wobbly-chair");

wobblyChair.onmouseover = function() {
  image.setAttribute("src", "img/wobblyChair.jpg");
};

wobblyChair.onmouseout = function() {
  image.setAttribute("src", "");
};

/* Straight Chair */
var straightChair = document.getElementById("straight-chair");

straightChair.onmouseover = function() {
  image.setAttribute("src", "img/straightChair.jpg");
};

straightChair.onmouseout = function() {
  image.setAttribute("src", "");
};

/* Rubik's Night Stand */
var rubikNightStand = document.getElementById("rubik-stand");

rubikNightStand.onmouseover = function() {
  image.setAttribute("src", "img/rubikNightStand.jpg");
};

rubikNightStand.onmouseout = function() {
  image.setAttribute("src", "");
};

/* SCREEN SIZE MAX 415PX */
