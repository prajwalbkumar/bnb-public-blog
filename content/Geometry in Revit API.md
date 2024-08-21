[8 Steps to Master Geometry in Revit API (youtube.com)](https://www.youtube.com/watch?v=lvJKf2jWKQY&list=PLABAnZRsrrL4xoeLvEmqtayeRC5b5GuwU&index=9&t=181s)

Geometry in [[Revit API]] is s crucial step in a Revit API Developer. It might feel very comfortable to work just updating and working with parameters, since changes can be visualized in the database quickly, but once it comes down to Geometrical analysis and updates, this can get tricky!

Here are 5 Crucial Identities - Taken from [Mariyan Developer - YouTube](https://www.youtube.com/@mariyandeveloper8437) video. 
### Vectors and Points
Each elements has a [[Location Property]]. Moving them is moved by a Vector. 
To Read - [[Cross Product]] [[Dot Product]]
### Solids and it's Composition
Everything in Revit is a Solid Geometry.
All Geometry Object derive from the GeometryObject Class

### Transform
Allows to perform Move, Rotation, and Scale to all objects in Revit. 
[[Read Transform from Family Instances]] + [[Transforms to Bounding Boxes]]

### Bounding Boxes
There are some filters for Bounding Boxes. (For Eg: BoundingBoxIntersects Filter)
Allows multiple view creation. 

### Planes
Contains information of the host, and can be interchangeable with transform. 