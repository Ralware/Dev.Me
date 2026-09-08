# Global Variables

Number = int(input("Enter A \"Number\" : "))
Array = [];

#Defined Functions 

def InputName():
    Name = input("Enter Your Name : ").strip().title()
    return f"Hello, {Name}"

def FactorialCalculator():
    Factorial = 1;
    for No in range(1,Number+1):
        Factorial*=No
        Array.append(No)
    return Factorial    

def FindSum():
    Num1 = float(input("Enter The First Number : "))
    Num2 = float(input("Enter The Second Number : "))
    return f"The Sum Of {Num1:.2f} & {Num2:.2f} Is : {round(Num1+Num2):,}"

# Final Output Prints

print(f"Factorial Of {Number} Is : {FactorialCalculator()}")
print("Factorial Numbers : ",Array)
print(InputName())
print(FindSum())
print(pow(25,5))