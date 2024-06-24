const words = [
    "immunoelectrophoretically",
    "rotavator",
    "tsktsk",
    "psychophysicotherapeutics",
    "squirrelled",
    "crypt",
    "uncopyrightable",
    "cysts",
    "pseudopseudohypoparathyroidism",
    "unimaginatively",
  ];
  
  words.some(function (word) {
    return word.length > 25;
  });
  
  words.some(function (word) {
    return word.indexOf("thyroid") !== -1;
  });
  
  words.every(function (w) {
    return w.length >= 5;
  });
  
  function allStrings(arr) {
    return arr.every(function (el) {
      return typeof el === "string";
    });
  }
  
  const btn = document.querySelector("button");
  btn.addEventListener("click", function (e) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(function (checkbox) {
      return checkbox.checked;
    });
    if (!allChecked) alert("PLEASE AGREE TO EVERYTHING!");
  });
  
  function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) return true;
    }
    return false;
  }
  
  mySome([4, 5, 6, 7], function (n) {
    return n > 5;
  });
  
  function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) return false;
    }
    return true;
  }
  
  myEvery([4, 5, 6, 7], function (n) {
    return n > 5;
  });
  
  myEvery([4, 5, 6, 7], function (n) {
    return Number.isInteger(n);
  });
  
  function hasOddNumber(arr) {
    return arr.some(function (val) {
      return val % 2 !== 0;
    });
  }
  
  function hasAZero(num) {
    return num
      .toString()
      .split("")
      .some(function (val) {
        return val === "0";
      });
  }
  
  function hasOnlyOddNumbers(arr) {
    return arr.every(function (val) {
      return val % 2 !== 0;
    });
  }
  
  function hasNoDuplicates(arr) {
    // return arr
    // .toString()
    // .split("")
    // .every(function (val) {
    //   return val !== val;
    // });
    // return arr
    // .toString()
    // .split("")
    // .every(function (val) {
    //  if val == val;
    // //  return false;
    // });
    return arr.every(function (val) {
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }
  
  function hasCertainKey (arr, key){
      return arr.every(function (val){
          return key in val
      })
  }
  
  function hasCertainValue (arr, key, searchValue){
      return arr.every(function(val) {
          return val[key] === searchValue
      })
  }
  