function
updateAllNames(string, oldPart, newPart) {
  if(string.includes(oldPart) === false) {
    return string;
  }
  string = string.replace(oldPart, newPart);
  return updateAllNames(string, oldPart, newPart);
};
travelDocument = 'Hello grasshoperPassport! You will be going to Cyprus. Your travel code is: "grasshoper8ugs" Enjoy your trip grasshoper!'
console.log(travelDocument);
console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'));