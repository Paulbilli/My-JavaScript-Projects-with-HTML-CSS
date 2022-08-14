const one = document.querySelector("#one");
one.onclick = () => {
 document.forms.display.value += 1;
};
const two = document.querySelector("#two");
two.onclick = () => {
 document.forms.display.value += 2;
};
const three = document.querySelector("#three");
three.onclick = () => {
 document.forms.display.value += 3;
};
const four = document.querySelector("#four");
four.onclick = () => {
 document.forms.display.value += 4;
};
const five = document.querySelector("#five");
five.onclick = () => {
 document.forms.display.value += 5;
};
const six = document.querySelector("#six");
six.onclick = () => {
 document.forms.display.value += 6;
};
const seven = document.querySelector("#seven");
seven.onclick = () => {
 document.forms.display.value += 7;
};
const eight = document.querySelector("#eight");
eight.onclick = () => {
 document.forms.display.value += 8;
};
const nine = document.querySelector("#nine");
nine.onclick = () => {
 document.forms.display.value += 9;
};
const zero = document.querySelector("#zero");
zero.onclick = () => {
 document.forms.display.value += 0;
};
const add = document.querySelector("#add");
add.onclick = () => {
 document.forms.display.value += "+";
};
const subs = document.querySelector("#subs");
subs.onclick = () => {
 document.forms.display.value += "-";
};
const multi = document.querySelector("#multi");
multi.onclick = () => {
 document.forms.display.value += "*";
};
const divide = document.querySelector("#divide");
divide.onclick = () => {
 document.forms.display.value += "/";
};
const dot = document.querySelector("#dot");
dot.onclick = () => {
 document.forms.display.value += ".";
};
const clear = document.querySelector("#clear");
clear.onclick = () => {
 document.forms.display.value = "";
};
const equals = document.querySelector("#equals");
equals.onclick = () => {
 if (display.value == 0) {
  alert("Enter numbers to calculate");
 } else {
  document.forms.display.value = eval(
   document.forms.display.value
  ).toLocaleString("en");
 }
};
