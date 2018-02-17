## Code 05 - Regex validate PIN code

February 16, 2018

https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

### Problem Domain:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false 