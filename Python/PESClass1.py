class PesClass:
    
    def __init__(self,num1,num2):
        self.num1 = num1
        self.num2 = num2
        
    def checkId(self):
        print(id(self.num1))
        print(id(self.num2))
        return type(self.num1),type(self.num2)
        
Object1 = PesClass(67,69)

print(Object1.checkId())            

