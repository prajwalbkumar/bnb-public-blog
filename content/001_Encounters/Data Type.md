We need to declare variables with the specific Datatypes. Since C is an older language.  
## Available Data types in C

### `int` 
- Takes 4 bytes / 32 bits of integer. 
- Range of possible numbers is limited.
- From Negative 2 Billion to Positive 2 Billion
### `unsigned int`
- It is a qualifier that can be applied to certain datatypes.
- It can effectively double the positive range of variables of the type by disallowing negative values.
- From 0 to 4 Billion
### `char`
- Used to store Characters
- Takes 1 byte / 8 bit of memory
- ACII allows mapping of characters to various numbers.
### `void`
It is a type and not a data type.
It does exist.
Functions can return void. It means it doesn't take any parameters.
It takes a placeholder, when there is no return value associated with the function.

## Available Data Types in CS50.h

### `bool`
Used to store Boolean values
True or False

### `string`
used to store variables to store a series of characters / word

### C# supports 3 Data Types to Hold Decimals

### `float`
* Real numbers with decimals
* Takes 4 bytes / 32 bits of memory
* They have a precision problem there is just 32 bits to work with
* Need to put F after the number to let the compiler know about the status of the Number. AKA [[Literal Suffix]].
* Float data type is the least precise.

### `double`
They take 8 bytes / 64 bits of information
Used to store variables with floating-point values / real numbers
No need to put in a [[Literal Suffix]]. Compiler defaults to take a decimal values as double. 

### `decimal`
Takes in 28 - 29 digits past the decimal position. 
Need an [[Literal Suffix]] of m after the number.

Data Types are important in C# unlike Javascript. The idea of [[Enforcing Data Types]] helps a developer to avoid bugs!

[[Mindful Allocation of Data Types]] is important. Data Types inform capabilities. If no calculation is required then always use a String and Vice Verca

Data Types are usually used along with [[Variable]]. 



