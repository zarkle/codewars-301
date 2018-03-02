## Code 14 - Indexed capitalization

March 1, 2018

https://www.codewars.com/kata/indexed-capitalization

### Problem Domain:
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

- `capitalize("abcdef",[1,2,5]) = "aBCdeF"`
- `capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.`

The input will be a lowercase string with no spaces and an array of digits.

### Pseudocode
- split string
- iterate through array
  - capitalize string letter at each array number
- return joined string