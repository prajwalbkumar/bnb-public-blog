## using
Start with a header file. 
The header file is referenced in C#. Instead of copying the entire library to your code, it just uses (for eg: using System;) the available libraries into your code. 

## namespace
A way to hold down different parts of your code. 
Default namespace is the name of the project.

## { curly braces }
Defines [[Scope]]. 

### static void Main()
This is the first entry point into the Code.
## internal class
A special [[Classes]] that asks the compiler to start the [[Compilation]] of the code from that point. The `internal class program` get executed first. Gives the first point of contact and goes into the `main` [[Methods]]

We need to have a method inside a class.

Note: You name the folder based on the class that's in them. Ideally have one class per one folder. Best practice of [[One Class per File]]

[[Code is meant to be read by Humans]]

Whenever a Project is Built, 2 folders are created, bin and obj, that is basically the compiled code.

We use `;` **Semi-colon** to tell the code that the line has terminated at that point. Some places do not use semicolon. 
A common logic to that could be that whichever line of code has a curly bracket under it, will not need a semicolon. Since the termination of that line depends on the [[Scope]] which the {} Bounds.

\n is still used here. 
To denote \ you will have to use \\ twice. 

A [[Verbatim Literal String]] String literal character. Using @


Logic has a flow in a program.  - 