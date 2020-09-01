// dom manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);


// retrieves the value from the text box and places it within html
// event handling
document.addEventListener("DOMContentLoaded",
function (event) {
  function sayHello (event) {
    console.log(event);

  this.textContent = "said it!";
  var name = document.getElementById("name").value;
  var message = "Hello " + name + "!";
  // <h2>Hello " + name + "!</h2>";

  // document
  // .getElementById("content")
  // .textContent = message;

// retrieve the value in content and apply message to a document property innerHTML
  // document
  // .getElementById("content")
  // .innerHTML = message;

// if the entered is student, then modify value with the id of title
if (name === "student") {
  var title = document.querySelector("#title")
  .textContent;
  title += " & Loving it";
  var title = document.querySelector("h1")
  .innerHTML = title;
}
else {
  document
  .querySelector("h1")
  .innerHTML = message;
}
}
// unobtrusive event binding
document.querySelector("button").addEventListener("click", sayHello);
// document.querySelector("button").onclick = sayHello;

document.querySelector("body")
  .addEventListener("mousemove",
    function (event) {
      if (event.shiftKey === true) {
      console.log(event.clientX);
      console.log(event.clientY);
    }
}
);
}
);
