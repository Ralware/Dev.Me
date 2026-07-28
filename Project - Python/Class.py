class SampleClass:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    
    def Sample(self):
        print(f"Name : {self.name.title()} | Age : {self.age}")

Sample1 = SampleClass("Ral",18)
Sample2 = SampleClass("Lar",81)

Sample1.Sample()
Sample2.Sample()