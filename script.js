const btnEncrypt = document.querySelector("#Encrypt");
const btnDecrypt = document.querySelector("#Decrypt");
const keyInput = document.querySelector("#key");
const result = document.querySelector("#result");

btnEncrypt.addEventListener("click", () => {
  const textarea = document.querySelector("#text");
  const key = parseInt(keyInput.value);
  const text = textarea.value;
  result.textContent = caesarCipher(text, key);
});

btnDecrypt.addEventListener("click", () => {
  const textarea = document.querySelector("#text");
  const key = parseInt(keyInput.value);
  const text = textarea.value;
  result.textContent = caesarCipher(text, -key);
});

function caesarCipher(text, shift) {
  let newText = "";

  for (let char of text) {
    const code = char.charCodeAt(0);
    let newCode;

    if (char >= "a" && char <= "z") {
      newCode = ((code - 97 + shift + 26) % 26) + 97;
    } else if (char >= "A" && char <= "Z") {
      newCode = ((code - 65 + shift + 26) % 26) + 65;
    } else {
      newCode = code;
    }
    // Convert the numerical code back to a character
    newText += String.fromCharCode(newCode) + " ";
  }

  return newText;
}
