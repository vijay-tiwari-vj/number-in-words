// Convert
let words = {
  0: "",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen"
};

let tenth = {
  2: "Twenty",
  3: "Thirty",
  4: "Fourty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Eighty",
  9: "Ninety"
};

function getOnesWords(n) {
  return `${words[n]}`;
}

function getUniqueTensWords(n) {
  return `${words[n]}`;
}

function getTensWords(n) {
  let tensPlace = n[0];
  let onesPlace = n[1];
  return `${tenth[tensPlace]} ${words[onesPlace]}`;
}

function getUniqueHundredsWords(n, rest) {
  let hundredsPlace = n[0];
  return `${words[hundredsPlace]} Hundred ${words[rest]}`;
}

function getHundredsWords(n) {
  let hundredsPlace = n[0];
  let tensPlace = n[1];
  let onesPlace = n[2];
  return `${words[hundredsPlace]} Hundred ${tenth[tensPlace]} ${words[onesPlace]}`;
}

function getCase1ThousandWords(n, rest) {
  let thousandsPlace = n[0];
  return `${words[thousandsPlace]} Thousand ${words[rest]}`;
}

function getCase2ThousandWords(n) {
  let thousandsPlace = n[0];
  let tensPlace = n[2];
  let onesPlace = n[3];
  return `${words[thousandsPlace]} Thousand ${tenth[tensPlace]} ${words[onesPlace]}`;
}

function getCase3ThousandWords(n, rest) {
  let thousandsPlace = n[0];
  let hundredsPlace = n[1];
  return `${words[thousandsPlace]} Thousand ${words[hundredsPlace]} Hundred ${words[rest]}`;
}

function getCase4ThousandWords(n) {
  let thousandsPlace = n[0];
  let hundredsPlace = n[1];
  let tensPlace = n[2];
  let onesPlace = n[3];
  return `${words[thousandsPlace]} Thousand ${words[hundredsPlace]} Hundred ${tenth[tensPlace]} ${words[onesPlace]}`;
}

function getCase1TenThousandWords(n, rest) {
  let tenThousandsPlace = n.slice(0, 2);
  return `${words[tenThousandsPlace]} Thousand ${words[rest]}`;
}

function getCase2TenThousandWords(n, rest) {
  let tenThousandsPlace = n.slice(0, 2);
  let tensPlace = n[3];
  let onesPlace = n[4];
  return `${words[tenThousandsPlace]} Thousand ${tenth[tensPlace]} ${words[onesPlace]}`;
}

function getCase3TenThousandWords(n, lastTwo) {
  let tenThousandsPlace = n.slice(0, 2);
  let hundredsPlace = n[2];
  return `${words[tenThousandsPlace]} Thousand ${words[hundredsPlace]} Hundred ${words[lastTwo]}`;
}

function getCase4TenThousandWords(n) {
  let tenThousandsPlace = n.slice(0, 2);
  let hundredsPlace = n[2];
  let tensPlace = n[3];
  let onesPlace = n[4];
  return `${words[tenThousandsPlace]} Thousand ${words[hundredsPlace]} Hundred ${tenth[tensPlace]} ${words[onesPlace]}`;
}

function getCase5TenThousandWords(n, lastThree, pattern) {
  let tenThousandsPlace = n[0];
  let thousandsPlace = n[1];
  return `${tenth[tenThousandsPlace]} ${words[thousandsPlace]} Thousand ${words[lastThree]}`.replace(pattern, " ");
}

function getCase6TenThousandWords(n, pattern) {
  let tenThousandsPlace = n[0];
  let thousandsPlace = n[1];
  let tensPlace = n[3];
  let onesPlace = n[4];
  return `${tenth[tenThousandsPlace]} ${words[thousandsPlace]} Thousand ${tenth[tensPlace]} ${words[onesPlace]}`.replace(pattern, " ");
}

function getCase7TenThousandWords(n, lastTwo, pattern) {
  let tenThousandsPlace = n[0];
  let thousandsPlace = n[1];
  let hundredsPlace = n[2];
  return `${tenth[tenThousandsPlace]} ${words[thousandsPlace]} Thousand ${words[hundredsPlace]} Hundred ${words[lastTwo]}`.replace(pattern, " ");
}

function getCase8TenThousandWords(n, pattern) {
  let tenThousandsPlace = n[0];
  let thousandsPlace = n[1];
  let hundredsPlace = n[2];
  let tensPlace = n[3];
  let onesPlace = n[4];
  return `${tenth[tenThousandsPlace]} ${words[thousandsPlace]} Thousand ${words[hundredsPlace]} Hundred ${tenth[tensPlace]} ${words[onesPlace]}`.replace(pattern, " ");
}

function getWords(digits, num) {
  let result = "";
  let numStr = num.toString();

  if (digits === 1) {
    // e.g. 6, range: {0 - 9}
    result += getOnesWords(numStr);
  } else if (digits === 2 && num < 100) {

    if (num < 20) {
      // e.g. 17, range: {10 - 19}
      result += getUniqueTensWords(numStr);
    } else {
      // e.g. 67, range: {20 - 99}
      result += getTensWords(numStr);
    }

  } else if (digits === 3 && num < 1000) {

    let lastTwo = parseInt(numStr.slice(1));
    if (lastTwo < 20) {
      // e.g. 114, range: {100 - 119}, {200 - 219},... {900 - 919}
      result += getUniqueHundredsWords(numStr, lastTwo);
    } else {
      // e.g. 374, range: {120 - 199}, {220 - 299},... {920 - 999}
      result += getHundredsWords(numStr);
    }

  } else if (digits === 4 && num < 10000) {

    let lastTwo = parseInt(numStr.slice(2));
    let lastThree = parseInt(numStr.slice(1));
    if (lastThree < 20) {
      // e.g. 4,017, range: {1,000 - 1,019}, {2,000 - 2,019},... {9,000 - 9,019}
      result += getCase1ThousandWords(numStr, lastThree);
    } else if (lastThree < 100) {
      // e.g. 6,063, range: {1,020 - 1,099}, {2,020 - 2,099},... {9,020 - 9,099}
      result += getCase2ThousandWords(numStr);
    } else if (lastTwo < 20) {
      // e.g. 3,718, range: {1,100 - 1,119}, {1,200 - 1,219}, {2,100 - 2,119},... {9,100 - 9,119},...
      result += getCase3ThousandWords(numStr, lastTwo);
    } else {
      // e.g. 7,482, range: {1,120 - 1,199}, {1,220 - 1,299}, {2,120 - 2,199},... {9,120 - 9,199},...
      result += getCase4ThousandWords(numStr);
    }

  } else if (digits === 5 && num < 100000) {

    // pattern for extra space
    let pattern = /\s+/g;

    let firstTwo = parseInt(numStr.slice(0, 2));
    let lastTwo = parseInt(numStr.slice(3));
    let lastThree = parseInt(numStr.slice(2));
    if (lastThree < 20 && firstTwo < 20) {
      // e.g. 10,014, range: {10,000 - 10,019}, {11,000 - 11,019},... {19,000 - 19,019}
      result += getCase1TenThousandWords(numStr, lastThree);
    } else if (lastThree < 100 && firstTwo < 20) {
      // e.g. 10,037, range: {10,020 - 10,099}, {11,020 - 11,099},... {19,020 - 19,099}
      result += getCase2TenThousandWords(numStr, lastThree);
    } else if (lastThree < 1000 && firstTwo < 20 && lastTwo < 20) {
      // e.g. 17,113, range: {10,100 - 10,119}, {10,200 - 10,219},... {11,100 - 11,119},... {19,100 - 19,119},...
      result += getCase3TenThousandWords(numStr, lastTwo);
    } else if (lastThree < 1000 && firstTwo < 20 && lastTwo < 100) {
      // e.g. 14,371, range: {10,120 - 10,199}, {10,220 - 10,299},... {11,120 - 11,199},... {19,120 - 19,199},...
      result += getCase4TenThousandWords(numStr);
    } else if (firstTwo < 100 && lastThree < 20) {
      // e.g. 23,017, range: {20,000 - 20,019}, {21,000 - 21,019},... {99,000 - 99,019}
      result += getCase5TenThousandWords(numStr, lastThree, pattern);
    } else if (firstTwo < 100 && lastThree < 100) {
      // e.g. 34,073, range: {20,020 - 20,099}, {21,020 - 21,099},... {99,020 - 99,099}
      result += getCase6TenThousandWords(numStr, pattern);
    } else if (firstTwo < 100 && lastTwo < 20) {
      // e.g. 78,312, range: {20,100 - 20,119}, {21,100 - 21,119},... {99,100 - 99,119},... {99,600 - 99,619},...
      result += getCase7TenThousandWords(numStr, lastTwo, pattern);
    } else {
      // e.g. 52,645, range: {20,120 - 20,199},... {21,420 - 21,499},... {99,520 - 99,599},... {99,920 - 99,999}
      result += getCase8TenThousandWords(numStr, pattern);
    }

  }
  return result;
}

// Convert number to words

function numberToWords() {
  let number = document.getElementById("number").value;
  let checkNumber = /^\d+$/;

  let words = document.getElementById("words");
  let validateNumber = document.getElementById("validate-number");
  words.textContent = "";
  validateNumber.textContent = "";

  if (checkNumber.test(number) === false ||
    parseInt(number) <= 0 || parseInt(number) >= 100000) {
    validateNumber.classList.add("text-danger");
    if (parseInt(number) <= 0) {
      validateNumber.textContent = "* Please enter a natural number";
    } else if(parseInt(number) >= 100000) {
      validateNumber.textContent = "* Please enter a number less than 1 lakh";
    } else {
      validateNumber.textContent = "* Please enter a number";
    }
  } else {
    function getDigits(num) {
      return num.toString().length;
    }

    number = parseInt(number);
    let digits = getDigits(number);

    let my_words = getWords(digits, number);
    words.className = "";
    words.textContent = `${my_words}`;
  }
}

// Convert a range of numbers to words

function numbersToWords() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let checkNumber = /^\d+$/;

  let rangeOfWords = document.getElementById("rangeOfWords");
  let validateNumber1 = document.getElementById("validate-number1");
  let validateNumber2 = document.getElementById("validate-number2");
  rangeOfWords.textContent = "";
  validateNumber1.textContent = "";
  validateNumber2.textContent = "";

  if (checkNumber.test(number1) === false ||
    parseInt(number1) <= 0 || parseInt(number1) >= 100000) {
    validateNumber1.classList.add("text-danger");
    if (parseInt(number1) <= 0) {
      validateNumber1.textContent = "* Please enter a natural number";
    } else if(parseInt(number1) >= 100000) {
      validateNumber1.textContent = "* Please enter a number less than 1 lakh";
    } else {
      validateNumber1.textContent = "* Please enter a number";
    }
  } else if (checkNumber.test(number2) === false ||
    parseInt(number2) <= 0 || parseInt(number2) >= 100000) {
    validateNumber2.classList.add("text-danger");
    if (parseInt(number2) <= 0) {
      validateNumber2.textContent = "* Please enter a natural number";
    } else if(parseInt(number2) >= 100000) {
      validateNumber2.textContent = "* Please enter a number less than 1 lakh";
    } else {
      validateNumber2.textContent = "* Please enter a number";
    }
  } else {
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if (number1 > number2) {
      let temp = number1;
      number1 = number2;
      number2 = temp;
    }

    for (let i = number1; i <= number2; i++) {
      function getDigits(num) {
        return num.toString().length;
      }

      let digits = getDigits(i);

      let my_words = getWords(digits, i);
      let divElement = document.createElement("div");
      divElement.textContent = `${i}: ${my_words}`;
      rangeOfWords.append(divElement);
    }
  }
}
