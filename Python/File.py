import csv
# File Inputs 
def InputData():
    Count = int(input("How Many Names ? :"))
    with open("Data.txt","a") as file:
        for Index in range(1,Count+1):
            Name = input(f"Name ({Index}): ")
            file.write(Name+"\n") # Without \n , it'll be appended like Name1Name2Name3

def ReadData():
    NamesArr = []
    with open("Data.txt","r") as file:
        for line in file:
            NamesArr.append(line.rstrip())
    for Name in sorted(NamesArr):
        print(Name)

def ReadStudentData():
    with open("Student.csv") as file:
        for line in file:
            row = line.rstrip().split(',')
            print(f"{row[0]} → {row[1]}")

def SortedStudentByName():
    DataSet = []

    with open("Student.csv") as file:
        reader = csv.reader(file)
        print(reader)
        for name,detail in reader:
            Data = {"name":name,"detail":detail}
            DataSet.append(Data)
    print(DataSet)
    
    for Data in sorted(DataSet,key=lambda Data:Data['name']):
        print(f"{Data['name']} → {Data['detail']}")

