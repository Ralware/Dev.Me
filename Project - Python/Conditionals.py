def NumberGuesser():
    GuessNumber = 67
    while True:
        Guess = int(input("What's The Number : "))
        if (Guess==GuessNumber):
            print("You Got It!")
            break
        else:
            print("Try Again!")

def IsEven(Num):
    return True if Num % 2 == 0 else False

def InputNum():
    Num = int(input("Enter A Number : "))
    if (IsEven(Num)):
        return ("Even")
    else:
        return ("Odd")

def SearchNames():
    Name = input("What's Your Name : ")

    match Name:
        case "Harry":
            return ("Toronto")
        case "Ron":
            return ("New York")
        case _:
            return ("Unknown")
        

