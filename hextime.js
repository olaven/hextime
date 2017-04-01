window.onload = pageLoaded;

function pageLoaded() {
  setInterval(updateTime, 1000)
}
function updateTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  var string = "#" + h + "" + m + "" + s ;
  print(string, "clock");
  updateBgColor(string);
}
function print(content, fieldId) {
  document.getElementById(fieldId).innerHTML = content;
}
function updateBgColor(hex){
  document.body.style.backgroundColor = hex; 
}
