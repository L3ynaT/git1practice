var button2022 = $(".event2022");
var button2023 = $(".event2023");
var button2024 = $(".event2024");
var button2025 = $(".event2025");

var kwkEvent = $("#kwk");
var aEvent = $("a");
var pythonEvent = $("#python");
var clubEvent = $("#club");
var javaEvent = $("#java");

button2022.on("click", kwkChange);

function kwkChange() {
  kwkEvent.css("color", "#f9f7ed");
  aEvent.css("color", "#f9f7ed");
  button2022.css("border", "none");
}

button2023.on("click", pythonChange);

function pythonChange() {
  pythonEvent.css("color", "#f9f7ed");
  button2023.css("border", "none");
}

button2024.on("click", clubChange);

function clubChange() {
  clubEvent.css("color", "#f9f7ed");
  button2024.css("border", "none");
}

button2025.on("click", javaChange);

function javaChange() {
  javaEvent.css("color", "#f9f7ed");
  button2025.css("border", "none");
}