<input type="text">
var text = document.querySelector("input");
text.addEventListener("keypress", function(event) {
  if(/[qwx]/i.test(String.fromCharCode(event.charCode)))
    event.preventDefault();
});
