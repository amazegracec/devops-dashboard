function submitFeedback() {
let name =
document.getElementById("name").value;
document.getElementById("message")
.innerHTML =
"Thank you " + name +
" for your feedback!";
}