function isAnagram(stringA, stringB) {
    
    stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
    stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  
    const stringASorted = stringA.split("").sort().join("");
    const stringBSorted = stringB.split("").sort().join("");

    return stringASorted === stringBSorted;
}

module.exports = isAnagram;