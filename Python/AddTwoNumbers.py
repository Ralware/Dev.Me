# Add Two Numbers

def AddTwoNumbers(l1,l2):
    List1 = l1[::-1]
    List2 = l2[::-1]

    Number1 = ""
    Number2 = ""
    
    for Element in List1:
        Number1 = Number1 + str(Element)
        
    for Element in List2:
        Number2 += str(Element)

    # Two Numbers Obtained In String Format

    Sum = str(int(Number1)+int(Number2))

    SumList = []
    
    for Element in Sum[::-1]:
        SumList.append(int(Element))

    return SumList

print(AddTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))

