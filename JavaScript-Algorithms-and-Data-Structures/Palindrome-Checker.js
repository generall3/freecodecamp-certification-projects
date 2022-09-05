function palindrome(str) {
str1 = str.toLowerCase().replace(/[\W_]/g, '');
str2 = str1.split('').reverse().join('');
return str1 === str2 ? true : false;
};

console.log(palindrome("eye"));