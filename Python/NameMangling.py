class Example:
    def __init__(self, internal, private):
        self._internal = internal
        self.__private = private

example1 = Example(
    'I can be accessed from outside the class, but should not',
    'I cannot be accessed directly from outside the class'
)
example2 = Example(
    'I should not be accessed from outside the class',
    'But I can be accessed from outside the class with name mangling'
)

print(example1._Example__private) 
print(example2._Example__private) 