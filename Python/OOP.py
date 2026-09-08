class Student:

    def __init__(self,name,house):
        if not name.strip():
            raise ValueError("Name Cannot Be Empty.")
        self.name = name
        self.house = house
    
    def __str__(self):
        return f"{self.name.title()} From {self.house}"

    @property # Getter
    def house(self):
        return self._house # named as _house to avoid the @house.setter being called infinitely
    
    @house.setter # Setter 
    def house(self, house):
        if house.title() not in ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]:
            raise ValueError("Error: Invalid House")
        self._house = house


def Input():
    Name = input("Name: ")
    House = input("House: ").title()
    Student_1 = Student(Name, House)
    print(Student_1)

if __name__ == "__main__":
    Input()

