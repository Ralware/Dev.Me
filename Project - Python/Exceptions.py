def InputValue():
    while True:
        try:
            return int(input("Enter A Number : "))
        except ValueError:
            print("Please Enter A Valid Number !")
    #   else:
    #       print("Whatever") - This Executes If There Is NO Exception

Num = InputValue()
print(Num)

