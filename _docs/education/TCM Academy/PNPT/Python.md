# PNPT

## Python

### Strings

Strings can be wrapped with single quotes ' 

```python
#!/bin/python3
'Hello World'
```

or double quotes "

```python
#!/bin/python3
"Hello World"
```

or they can have multiple lines of strings

```python
#!/bin/python3
"""
Hello
World
"""
```

### Expressions

```python
#!/bin/python3
print (1 == 2)  # prints False
print (1 == 1)  # prints True
print (2 > 1)  # prints True
print (2 >= 2)  # prints True
print (2 < 2)  # prints False
print (2 <= 2)  # prints True
print (1 != 2)  # prints True
```

### and or

```python
#!/bin/python3
print (True and False)  # prints False
print (True and True)  # prints True
print (True and not False)  # prints True
print (True or False)  # prints True
print (False or False)  # prints False
print (False or True)  # prints True
```

### For loop

```python
#!/bin/python3
for i in range(0, 10): # loop from 0 to 9
  print (i)
# will print 0 1 2 3 4 5 6 7 8 9
```

### while loop

```python
#!/bin/python3
i = 10
while i > 0:
  print (i)
  i = i - 1
# will print 10 9 8 7 6 5 4 3 2 1
```

### If and if-else statements

```python
#!/bin/python3
a_var = 10
if a_var > 8:
    print ("Hello")
elif a_var > 9:
    print ("World")
else a_var > 10:
    print("Wow!")
# will print "Hello" because it's the first true statement that the execution came upon

if a_var > 8:
  print ("Hello")
if a_var > 9:
  print ("world")
if a_var > 10:
  print ("Wow!")
# will print "Hello world" because there are multiple if statments that are true here
```

### Tuples

```python
#!/bin/python3
a_few_names = ('chris', 'steve', 'mike')
a_few_ages = (22, 23, 324)

print (a_few_names)  # will print ('chris', 'steve', 'mike')
print (a_few_ages)  # will print ('22, 23, 324)

for age in a_few_ages:
  print (age)
  # will print 22
  # will print 23
  # will print 324
for name in a_few_names:
  print (name)
  # will print chris
  # will print steve
  # will print mike
```

### Dictionaries

```python
#!/bin/python3
a_dict_object = {
   "name": "chris",
    "age": 24,
     "pets": ("clue", "scrabble")
}

print (a_dict_object)
```

### Lists

```python
#!/bin/python3
a_number_list: list[int] = [1,2,3,4,5,6,7]
a_string_list: list[str] = ["steve", "mike", "chris"]
a_tuple_list: list[tuple] = [("steve", "mike", "chris"), (22,23,24)]
```

### Functions and Methods

```python
#!/bin/python3
def add(a: int, b: int) -> int:
  return a + b  # returns the two added numbers of a and b

def multiply(a: int, b: int) -> int:
  return a * b  # returns the two multiplied values of a and b

print (add(1, 2))  # will print 3
print (multiply(2, 2))  # will print 4
```

### Casting

```python
#!/bin/python3
my_floating_point_number = 3.14156
print (my_floating_point_number)  # will print 3.14156
print (int(my_floating_point_number))  # will print 3
```

### Classes

```python
#!bin/python3

import abc # for abstract classes

class Animal(abc.ABC):  # creates an abstract class that cannot be intantiated on it's own
  kingdom: str
  
  @abc.abstractmethod
  def make_sound(self):
    raise NotImplementedError;
  
# inherit from animal
class Cat(Animal):

  def __init__(self):
    super(Animal, self).__init__(kingdom="Feline")
    
  def make_sound(self):
    print ('Meow!')
    
# inherit from animal
class Dog(Animal):

  def __init__(self):
    super(Animal, self).__init__(kingdom="Kanine")
    
  def make_sound(self):
    print ('Woof!')

animals: list[Animal] = [Cat(), Dog()]

# don't care what they say just that they can say it
for animal in animals:
  animal.make_sound();  # prints "meow" or "woof"
```
