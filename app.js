object.onclick = function palindrome(str) {
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
};
console.log(palindrome("not a palindrome"));
