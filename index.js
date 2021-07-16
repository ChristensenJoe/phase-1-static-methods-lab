class Formatter {
  //add static methods here
  static capitalize(string) {
    let strArr = string.split("");
    strArr[0].toUpperCase();
    return strArr.join("");
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }

  static titleize(string) {
    let strArr = string.split(" ");
    strArr.forEach((word) => {
      let exclude = ["a", "an", "but", "of", "and", "for", "at", "by", "from"];

      if(!exclude.includes(word)) {
        let strArr2 = word.split("");
        strArr2[0].toUpperCase();
        word = strArr2.join("");
      }
    });
    return strArr.join(" ");
  }
}