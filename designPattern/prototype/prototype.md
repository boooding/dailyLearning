# Prototype

## Intent

**Prototype** is a creational design pattern that _lets you copy existing objects without making your code dependent on their classes._

## Problem

- Want to create an exact copy of Object
  - First, create a new object of the same class. 
  - Then go through all the fields of the original object and copy their values over to the new object.
- But not all objects can be copied that way as some of the object’s fields may be private and not visible from outside of the object itself.
  - Since have to know the object’s class to create a duplicate, the code becomes dependent on class.
  - Only know the interface that the object follows, but not its concrete class

