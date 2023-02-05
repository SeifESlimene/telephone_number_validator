function check() {
  let number = document.getElementById("number").value;
  let numberFormat = /^(1)?(\s|\s\(|\()?[0-9]{3}(\)\s|\)|\s|-)?[0-9]{3}(-|\s)?[0-9]{4}$/;
  let numberFormatGlobal = /^(1)?(\s|\s\(|\()?[0-9]{3}(\)\s|\)|\s|-)?[0-9]{3}(-|\s)?[0-9]{4}$/g;
  let arrayCheck = [...number.matchAll(numberFormatGlobal)];
  console.log([...number.matchAll(numberFormatGlobal)]);
  if (numberFormat.test(number)) {
    if (
      (arrayCheck[0][2] === "(" && arrayCheck[0][3] !== ")") ||
      (arrayCheck[0][3] === "-" && arrayCheck[0][4] !== "-") ||
      (arrayCheck[0][2] !== "(" && arrayCheck[0][3] === ")")
    ) {
      document.getElementsByClassName("error-number")[0].style.display =
        "block";
      document.getElementsByClassName("success")[0].style.display = "";
      document.getElementsByClassName("error")[2].style.display = "";
    } else {
      document.getElementsByClassName("error-number")[0].style.display = "";
      document.getElementsByClassName("success")[0].style.display = "block";
      document.getElementsByClassName("error")[2].style.display = "";
    }
  } else {
    if (number === "") {
      document.getElementsByClassName("error-number")[0].style.display =
        "block";
      document.getElementsByClassName("success")[0].style.display = "";
      document.getElementsByClassName("error")[2].style.display = "block";
    } else {
      document.getElementsByClassName("error-number")[0].style.display =
        "block";
      document.getElementsByClassName("success")[0].style.display = "";
      document.getElementsByClassName("error")[2].style.display = "";
    }
  }
}
