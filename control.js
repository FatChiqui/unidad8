let validar = () => {
  let user = document.getElementById("inputUser").value;
  let password = document.getElementById("inputPassword4").value;

  if (password.length === 0 || user.length === 0) {
    alert ("Rellene el campo");
    return false;
  } else if (!user.includes('@')) {
    alert ("Falta el '@' en el  bloque Usuario");
    return false;
  }
}