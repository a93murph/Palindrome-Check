function palindrome(str) {
  function reverse(s) {
    var o = "";
    for (var i = s.length - 1; i >= 0; i--) o += s[i];
    return o;
  }
  let newStr = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let reverseStr = reverse(newStr);
  if (newStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}
const button = document.querySelector(".event-button");

const input = document.querySelector(".input");
const output = document.querySelector(".output");

button.addEventListener("click", (x) => {
  const result = palindrome(input.value);
  let text = "";
  if (result === true) {
    text = "Yes, this is a palindrome!";
  } else {
    text = "No, this is not a palindrome.";
  }
  output.innerText = text;
});
