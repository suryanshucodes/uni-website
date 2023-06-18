function togglehide() {
  let content = document.getElementById("toggle-content");
  if (content.style.display != "none") {
    content.style.display = "none";
  }
  else {
    content.style.display = "block";
  }
}
function displayTime(){
    time = new Date();
    document.getElementById('time-div').innerHTML = time;
}
setInterval(displayTime, 1000);