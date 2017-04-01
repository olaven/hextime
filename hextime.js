window.onload = pageLoaded;

var string; //is global so that it can be used to reset color of clockbackground, line 10
var textHex = 0;

function pageLoaded() {
  setInterval(updateTime, 1000);

  document.getElementById("clock").onmousemove = changeTextColor;
  document.getElementById("clock").onmouseleave = function() {//resets to bgcolor of reset of the document
    console.log(string);
    document.getElementById("clock").style.backgroundColor =  string;//DOES NOT WORK
  };

}
function updateTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  string = "#" + h + "" + m + "" + s
  print(string, "clock");
  updateBgColor(string);
}
function print(content, fieldId) {
  document.getElementById(fieldId).innerHTML = content;
}
function updateBgColor(hex){
  document.body.style.backgroundColor = hex;
}
function changeTextColor(evt) {
  evt.target.style.color = "#" + textHex.toString();
  evt.target.style.backgroundColor = "#" + (textHex.toString() - 350);

  textHex += 500;
}
