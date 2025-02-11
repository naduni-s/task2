// 1. Reverse a string
function reverse(str) {
    // Convert the string to an array, reverse it, and then join it back to a string
    return str.split('').reverse().join('');
}

const reversed = reverse("apple");
console.log(`Reversed string: ${reversed}`); 


// 2. Find the second largest number in an array
function secondLargestNumber(numbers) {
    // Remove duplicates from the array
    const uniqueNumbers = [...new Set(numbers)];
    
    // Sort the array in descending order
    uniqueNumbers.sort((a, b) => b - a);

    // If there are fewer than two unique numbers, return undefined
    if (uniqueNumbers.length < 2) {
        return undefined;
    }
    
    // Return the second-largest number
    return uniqueNumbers[1];
}

const array = [9, 14, 61, 56, 98, 33];
const secondLargestNum = secondLargestNumber(array);
console.log(`Second largest number: ${secondLargestNum}`); 


// 3. Check if a given string is a palindrome
function checkPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const palindromeCheck1 = checkPalindrome("Step on no pets");
console.log(`Is the string a palindrome? ${palindromeCheck1}`);