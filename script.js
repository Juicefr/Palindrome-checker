const btn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  if (textInput.value.trim() === "") {
    alert("Please input a value");
  } else {
    const cleaned = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
      result.textContent = `${textInput.value} is a palindrome` ;
    } else {
      result.textContent = `${textInput.value} is not a palindrome`;
    }
  }
});
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "lightblue";
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
}); 