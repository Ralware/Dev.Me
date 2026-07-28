class Circle:

    def __init__(self,radius):
        self.radius = radius

    @property # Getter
    def radius(self):
        return self._radius 
    
    @radius.setter # Setter 
    def radius(self,radius):
        if(radius<=0):
            raise ValueError("Error: Invalid Radius")
        self._radius = radius 
    
    @radius.deleter
    def radius(self):
        print("Deleting Radius...")
        del self._radius

    def __str__(self):
        return str(self.radius)

# Object myCircle
myCircle = Circle(7)
print(f"Radius : {myCircle}")

# Changing The Raidus Of The Circle 
myCircle.radius = 11
print(f"After Modification, Radius : {myCircle.radius}")

del myCircle.radius
print("...Radius Deleted...")