console.log("This is tutorial 46");
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global
// reg = /harry/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); ---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg); // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg); // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, "SHUBHAM");
console.log(result5);

console.log("This is tutorial 47");

let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/;

let str = "h*rry means codewith"; //

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
console.log("This is tutorial 48");
// Regular Expressions:
// Basic functions
// Metacharacter Symbols

// const regex = /^h/i;

// Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/;

// const str = "hirry9 bhai";
str = "harrry bhai";
str = "harhar1r4r5r bhai";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}

console.log("This is tutorial 49");

// Character classes
let regex = /\war/; //word character - _ or alphabet or numbers
regex = /\w+d1r/; // \w+ means one or more word characters
regex = /\Wbhai/; // Non word character
regex = /\W+bhai/; // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/; // \d+ means more than one digit
regex = /\D999/; // \D means non digit
regex = /\D+999/; // \D+ means more than one non digit
regex = /\ska number/; // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/; // Match non whitespace character
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/; // word boundary

// Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
