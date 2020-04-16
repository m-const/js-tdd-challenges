"use strict";
export function anagram(target, search) {
  //1.Anagram function
  //target must be a string
  // search can be either a string or an array of strings
  if (typeof target === "string" && target.length > 0) {
    if (typeof search === "string" || Array.isArray(search)) {
      let returnArray = [];

      let tarStrClean = target.replace(/([^A-Z])/gi, "").trim();
      let tarArray = tarStrClean
        .split("")
        .sort()
        .toString()
        .toLocaleLowerCase();

      if (typeof search === "string") {
        if (search.length < 1 || search === target) return false;
        let strCompClean = search.replace(/([^A-Z])/gi, "").trim();
        let strComp = strCompClean
          .split("")
          .sort()
          .toString()
          .toLocaleLowerCase();

        if (tarArray.localeCompare(strComp) === 0) {
          returnArray.push(search);
        }
      } else {
        search.forEach((element) => {
          if (element === target || typeof element !== "string" || element.length <1) return; //skip any array elements that are either, not strings, empty strings or the same as target

          let strCompClean = element.replace(/([^A-Z])/gi, "").trim();
          let comp = strCompClean
            .split("")
            .sort()
            .toString()
            .toLocaleLowerCase();

          if (tarArray.localeCompare(comp) === 0) {
            returnArray.push(element);
          }
        });
      }

      const returnValue = returnArray.length > 0 ? returnArray : null;
      return {
        target: target,
        anagram: returnValue,
      };
    } else {
      return false;
    }
  } else {
    return false;
  }
}
