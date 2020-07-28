let thenumber = 195650;

function addCharacters(num) {
  // Write Code Here To Add , And . Between Numbers

  num = num.toString();
  console.log(typeof num);

  if (num.length === 3) console.log(num);
  else if (num.length > 3 && num.length <= 6)
    console.log(
      num.substring(0, num.length - 3) + "." + num.substring(num.length - 3)
    );
  else {
    console.log(
      num.substring(0, num.length - 6) +
        "," +
        num.substring(num.length - 6, num.length - 3) +
        "." +
        num.substring(num.length - 3)
    );
  }
}

addCharacters(thenumber); // 195,650.43
