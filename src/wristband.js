function _checkRow(arr) {
  let isEqual = true;
  arr.forEach((element) => {
    //check if each element is equal to the next one
    for (let i = 0; i < element.length - 1; i++) {
      if (element[i] !== element[i + 1]) {
        isEqual = false;
        return;
      }
    }
  });
  return isEqual;
}

function _checkCol(arr) {
  let numCols = arr[0].length; // find out how long each array is
  let numRows = arr.length;
  //check if each element of each 2nd order element
  let isEqual = true;
  for (let i = 0; i < numCols - 1; i++) {
    for (let x = 0; x < numRows - 1; x++) {
      if (arr[i][x] !== arr[i + 1][x]) {
        return false;
      }
    }
  }
  return isEqual;
}

function _diagRight(arr) {
  
  let mLen = arr[0].length - 1;
  let res = new Array();
  arr.forEach((element, key) => {
    res[key] = [];
    for (let y = key, x = mLen; x > 0; x--, y++) {
      if (y > arr.length - 2) continue;
      if (arr[y][x] === arr[y + 1][x - 1]) {
        res[key][y] = true;
      }
    }
  });
  let returnArray = [];

  res.map((element, key) => {
    let cleanRes = res[key].filter((e) => e !== null);
    returnArray[key] = cleanRes.length === mLen;
    
  });
  return returnArray.findIndex((e) => e === true) > -1;
}

function _diagLeft(arr) {
  arr = [
    ["A", "B", "C"],
    ["D", "s", "F"],
    ["C", "H", "I"],
    ["J", "K", "L"],
  ];
  let mLen = arr[0].length - 1;
  let res = new Array();
  for (let y = 0, x = mLen; x > 0; x--, y++) {
    if (arr[y][x] === arr[y + 1][x - 1]) {
      res[y] = true;
    }
  }

  return res.length == mLen;
}

export function wristband(input) {
  //check the input is an array
  if (!Array.isArray(input)) {
    return null;
  }
  return _checkRow(input)
    ? true
    : _checkCol(input)
    ? true
    : _diagRight(input)
    ? true
    : _diagLeft(input)
    ? true
    : false;
}

