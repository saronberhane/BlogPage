// Submit the form when the user presses Enter
document.getElementById("email").addEventListener("keydown", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
}
});