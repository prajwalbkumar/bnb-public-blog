Some [[Methods]] are Stateful and Stateless depending on how they function. 

Some method like Stateless Methods do not rely on the current [[State]] of the program. They do not alter anything in the [[Memory]] of the user's backend. [[Stateless Methods are also called as Static Methods]]. For example: `Console.WriteLine()`

Stateful Methods alter the memory of the backend. They rely on values stored in the memory by previous lines of codes that have been already executed. [[Stateful Methods are also called as Instance Methods]] as they modify the state of the application by updating values or storing new values.

Stateful Methods keep track of their state in [[Fields]], which are variables defined on the class.

When creating Stateful Methods, you must create an instance of the class so that the method can access state. For examples, majority of the classes in the [[Revit API]] requires their classes to be called onto which they can function. 

For eg. `collector = FilteredElementCollector(doc).Methods()`

Here an object of the FilteredElementCollector class is created first onto which method defined in the class or methods [[Inheriteed]] from another class.

An instance of the class is also called as an [[Object of a Class]] which forms the basis of [[Object Oriented Programming]].