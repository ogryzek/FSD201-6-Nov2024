/* 
EXAMPLE:
try/catch error handling
*/

function logMyErrors(error) {
    console.error(`Error: ${error}`);
}

try {
    throw 'myException';
} catch(e) {
    logMyErrors(e);
}


/* JSON Validator */

function isValidJSON(text) {
    try {
        JSON.parse(text)
        return true;
    } catch {
        return false;
    }
}

testString = 'lololasdlaskdjskldjslkjd';
console.log(`${testString} is valid JSON: ${isValidJSON(testString)}`);
