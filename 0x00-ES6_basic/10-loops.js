export default function appendToEachArrayValue(array, appendString) {
    const myarr = [];
    for (const value of array) {
      myarr.push(appendString + value);
    }
  
    return myarr;
  }
  