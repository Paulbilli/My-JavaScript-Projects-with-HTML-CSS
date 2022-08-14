const pswrd_1 = document.querySelector("#pswrd_1");
const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector(".error-text");
const btn = document.querySelector("button");
const showBtn = document.querySelector(".show");
pswrd_1.addEventListener("keyup", active);
pswrd_2.addEventListener("keyup", active2);
function active() {
 if (pswrd_1.value.length >= 6) {
  btn.removeAttribute("disabled", "");
  btn.classList.add("active");
  pswrd_2.removeAttribute("disabled", "");
 } else {
  btn.setAttribute("disabled", "");
  btn.classList.remove("active");
  pswrd_2.setAttribute("disabled", "");
 }
}
btn.addEventListener("click", () => {
 if (pswrd_1.value != pswrd_2.value) {
  errorText.style.display = "block";
  errorText.classList.remove("matched");
  errorText.textContent = "Oops! Incorrect Password";
  btn.style.backgroundColor = "red";
  btn.textContent = "INVALID";
  return false;
 } else {
  errorText.style.display = "block";
  errorText.classList.add("matched");
  errorText.textContent = "Nice! Login Successful";
  btn.textContent = "SUCCESS";
  return false;
 }
});
function active2() {
 if (pswrd_2.value != "") {
  showBtn.style.display = "block";
  showBtn.onclick = function () {
   if (pswrd_1.type == "password" && pswrd_2.type == "password") {
    pswrd_1.type = "text";
    pswrd_2.type = "text";
    this.textContent = "Hide";
    this.classList.add("active");
   } else {
    pswrd_1.type = "password";
    pswrd_2.type = "password";
    this.textContent = "Show";
    this.classList.remove("active");
   }
  };
 } else {
  showBtn.style.display = "none";
 }
}
