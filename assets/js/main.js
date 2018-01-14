var level0 = document.getElementById('level0');
var level1a = document.getElementById('level1a');
var level1b = document.getElementById('level1b');
var level2 = document.getElementById('level2');
var level3 = document.getElementById('level3');
var textBefore;

function showLevel0() {
  textBefore = level0.value;
  Materialize.toast(textBefore, 4000);
}

function showLevel1() {
  var combine = `${level1a.value} ${level1b.value}`;
  Materialize.toast(combine, 4000);
}

function showUppercase() {
  textBefore = level2.value;
  var convertUppercase = textBefore.toUpperCase();
  Materialize.toast(convertUppercase, 4000);
}

function showLowercase() {
  textBefore = level2.value;
  var convertLowercase = textBefore.toLowerCase();
  Materialize.toast(convertLowercase, 4000);
}

function showCapitalize() {
  textBefore = level3.value;
  var convertCapitalize = textBefore.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  Materialize.toast(convertCapitalize, 4000);
}