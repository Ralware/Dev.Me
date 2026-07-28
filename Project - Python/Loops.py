Students = ["John", "Alice", "Bob", "Eve"]

# --------------------------------------------------------------------

def CustomLoop():
    Num = int(input("Enter The Number OF Iterations : "))
    for Count in range(1,Num+1):
        print("Iteration Number :", Count)

def AcceptInput():
    while True:
        Num = int(input("Enter The Number : "))
        if(Num>0):
            break
        else:
            print("Please Enter A Positive Number !")
    return f'The Number Is : {Num}'

def DisplayStudents():
    for Student in Students:
        print("Student Name :", Student)

def DisplayStudentsWithIndex():
    for Index in range(len(Students)):
        print(f"{Index+1}){Students[Index]}")

# --------------------------------------------------------------------

StudentDictionary = {
    "A":"100",
    "B":"200",
    "C":"300",
    "D":"400",
    "E":"500"
} 

BigStudentDictionary = {
    "A": {
        "Name": "John",
        "Age": 20,
        "Grade": "A"
    },
    "B": {
        "Name": "Alice",
        "Age": 22,
        "Grade": "B"
    },
    "C": {
        "Name": "Bob",
        "Age": 21,
        "Grade": "C"
    },
    "D": {
        "Name": "Eve",
        "Age": 23,
        "Grade": "D"
    }
}

for Data in BigStudentDictionary:
    print(BigStudentDictionary[Data]["Name"])

for i in range(1,6):
    for j in range(1,11):
        print("#",end="")
    print()