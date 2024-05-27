function generatePassword() {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
  const passwordLength = document.getElementById("inp-num").value;

  for (let i = 0; i < passwordLength; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  document.getElementById("pass-screen").textContent = pass;
}
