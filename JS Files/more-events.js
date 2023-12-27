document.getElementById("btn-more").addEventListener("mouseenter", function () {
  // console.log('more events');
});
document.getElementById("btn-more").addEventListener("mousemove", function () {
  console.log("more events");
});
document.getElementById("text-field").addEventListener("focus", function () {
  console.log("event triggered inside the input field");
});
document.getElementById("text-field").addEventListener("blur", function () {
  console.log("event triggered inside the input field by blur");
});