
// console.log(words);
// words = words.split(" ")
// console.log(words);
// words.replace('wed', "kl;")


function palindrome(str) {
    let reverse = ""

    for (let index = str.length - 1; index >= 0; index--) {
        reverse += str[index]
    }

    if (str == reverse) {
        return true
    }

    return false
}

// console.log(palindrome("hello"));
// console.log(palindrome("Bob"));
// console.log(palindrome("stats"));

function missingNumber(array) {
    let arraySum = 0
    for (let index = 0; index < array.length; index++) {
        arraySum += array[index]
    }

    return 45 - arraySum
}

function missingNumber2(array) {
    array.sort()

    for (let index = 0; index < 9; index++) {
        if (array[index] != index + 1) {
            return index + 1
        }
    }
}

function missingNumber3(array) {
    let testArray = [1,2,3,4,5,6,7,8,9]

    array.sort()

    for (let index = 0; index < testArray.length; index++) {
        if (array[index] != testArray[index]) {
            return testArray[index]
        }
    }

    return 0
}


// let testArray1 = [1,2,3,5,4,6,7,8]
// let testArray2 = [5,2,4,8,6,1,3,9]
// console.log(missingNumber(testArray1))
// console.log(missingNumber(testArray2))
// console.log(missingNumber2(testArray1))
// console.log(missingNumber2(testArray2))
// console.log(missingNumber3(testArray1))
// console.log(missingNumber3(testArray2))

// Camel casing function
// Will remove all underscores and hyphens and camelCase the words.
// Will only capitalize the first letter if it was originally capitalized.
// all-the-statesmen = allTheStatemen
// Like_a_boss = LikeABoss
// overload_gear = overloadGear

function convertCamelCase(str) {
    let strArray = str.split(/[-_]/)
    
    for (let index = 0; index < strArray.length; index++) {

        if (index == 0) {
            continue
        }

        let currentString = strArray[index]
        let capChar = currentString[0].toUpperCase()
        let strRest = currentString.substring(1)

        strArray[index] = capChar + strRest
    }

    return strArray.join("")
}



console.log(convertCamelCase("the-stealth-warrior"));

function switchChar(inputChar, actualChar, changeChar) {
    if (actualChar.length != changeChar.length) {
        return "Length mismatch."
    }

    for (let index = 0; index < actualChar.length; index++) {
        if (index != actualChar.lastIndexOf(actualChar[index])) {
            return "Repeated value."
        }
        
    }

    if (inputChar.length > actualChar.length) {
        return -1
    }

    let outChar = ""

    for (let index = 0; index < inputChar.length; index++) {

        if (actualChar.indexOf(inputChar[index]) == -1) {
            return -1
        }

        outChar += changeChar[actualChar.indexOf(inputChar[index])]
    }

    return outChar
}

console.log(switchChar("hoe", "htrqzoe", "abcdeko"));
