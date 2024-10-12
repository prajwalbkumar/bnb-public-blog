By [[Professor David J. Malan]]

Computer Science (CS) is applicable to every possible field in the world, from Economics, to Social Science. There's a place for CS everywhere.

Almost all of the software today is Web Based or Phone Based. [[Architecture Software should shift to Web-Based Interfaces]].

* Learn how to solve problems
* Lean how to represent numbers, letters, colours, images, video, etc
* Learn how to write Algos/Code

It's not where you end up relative to your peers, but where you end up relative to when you started this course.

---
### Week 1 - C

[[Computational Thinking]] clean up your thought processes not just in CS but in every aspect of your life. Because the Secret sauce is the same.

31 is the highest you can count in a Unary System. It is just how you can represent up to the number 31. Also called Base 1

Binary is Base 2
0 & 1

BIT is either a single 0 / 1
Transistors are a switches. 

Base 10 System - Decimal System
123 - **One Hundred Twenty Three** 

* [x] #task**Different Types of Binary/Unary/Decimal, etc** deep dive in it 📅 2024-01-28 ✅ 2024-03-24
 
[[ASCII]] is the representation of letters in Numbers starting from 65 for Cap **A**.  ASCII Uses 8Bits.
[[ASCII]] isn't enough to represent some Asian/ Accented letters of other alphabets.
Emojis are under the [[UNICODE]] Representation. UNICODE is a Superset of ASCII. Sometimes use 16Bits.

UNICODE's mission is to represent  and preserve all Human Language letters based from the past, present and the future for all languages.

**😂 - Face with Tears of Joy, is the most popular emoji of 2023**

Unicode Code Point, - Base 16, Hexadecimal 

We are now using UNICODE instead of ASCII. It gives us the ability to showcase 4 Billion Characters

[[Fitzpatrick Scale]], for representing skin tones for Emojis.

[[Context Matters in Binary Representation]]

[[Pseudocode]] - Writing each steps of the solutions, accurately, succinctly. and line by line. 

[[Arguments >> Function >> Side Effect]]

Some of the functions basic ones are already developed and stored in files that are called [[Libraries]] for example for standard input and output functions are included in the <stdio.h> library for C.

[[Data Type]]

[[Conditionals]]

[[Loops]]

[[Functions]]

[[Scope]]

[[Constant]]

[[Integer Overflow]]

[[Choice of Numbered Datatype can have memory implication]] 
Does it mean that [[Increasing the precision of your Rhino Model, ask for more computational Power?]]

[[Floating Point Imprecision]]

[[This is where Super Computers come into play]]

[[Integer Overflow]] would be an issue on 19th January 2038 as well. 

[[Issue with Boeing]]

This is closely referenced from [[Binary Digits]]

[[Epoch Time]]

[[Type Casting]]

[[Data Type]]

[[Variable]]

---
### Week 2 - Arrays

[[Command Line Argument]]

[[Compiling Process when using Make]]

[[Decompiling]] it is difficult to reverse engineer due to the nature of too many ways to solve a given issue, and the fact of loosing a lot of variables and functions declaration in the process.

Read - [[Why can't we reverse engineer a code]]

[[Debugging]] 

[[Rubber Duck Debugging]]

[[Arrays]] - Sequence of values, placed back to back in memory
A `string` IS a Array of `char`

[[Global Variable]]

[[NUL]] value is appended after a word ends always!

[[Exit Status]]

---

### Week 3 - Algorithms

[[Algorithmic Thinking]]

[[Linear Search]]

[[Binary Search]]

[[Hashing and Hash Table]]

[[Order of Run Time of an Algorithm]] - Read about it in Detail

[[Code Smell - Something is Wrong in the Code]]

[[Data Structures]]

[[Sorting]] - Read about it in Detail

[[Recursive Functions]] - Read about it in Detail
Also Read - Google prints did you mean recursion again and again and again!! Lol

[[Creating Custom Datastructure]]


### Week 4 - Memory

Evey image and videos are stored as 0 and 1 in the memory.
RGB - Some amount of red, green and blue. 

Notation for Colours - HEX Codes is the HASH RRGGBB

RED = FF0000
GREEN = 00FF00
BLUE = 0000FF

For colours, we use Hexadecimal. (Base 16)
0123456789ABCDEF

Computers use Hexadecimal to denote the address in the memory.
0x Prefix is used to denote hexadecimal.

[[Pointers]]
 
Pointees
Dereferencing 

\*p means go to the address. 

Arrays have contiguous addresses in the memory. 

A string is an array of chars. 
A string variable is technically a pointer that refers to the location of the characters stored  contiguously in memory.  

HISTORY - WHY DID COMPUTERS EARLIER HAVE ONLY 2GB OG MEMORY. The case of pointer. 32bit vs 64bit

`string s = "HI!`
`char *s = "HI!`

They both are the same thing. 

[[Pointer Arithmetric]]

malloc is a function that allocates a memory address of a certain length for you. 
But once this is allocated, you must also dispose or free the resources of the memory once done. 

Memory Leak
Garbage Value

Passing by Value
Passing by Reference

### Week 5 - Data Structures

[[Data Structures]]

[[Queue]]
[[FIFO - First in First Out]]

[[Stacks]]
[[LIFO - Last in First Out]]

[[Linked Lists]]