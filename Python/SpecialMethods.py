# class Book:
#    def __init__(self, title, pages):
#        self.title = title
#        self.pages = pages

# book1 = Book("Built Wealth Like a Boss", 420)
# book2 = Book("Be Your Own Start", 420)

# print(len(book1)) TypeError: object of type 'Book' has no len()
# print(str(book1)) <__main__.Book object at 0x102ed2900>
# print(book1 == book2) False even though they have the same number of pages

#------------How To Do It Correctly -----------------

class Book:

    def __init__(self,title,pages):
        self.title = title
        self.pages = pages
    
    def __len__(self):
        return self.pages
    
    def __str__(self):
        return f"{self.title} Has {self.pages} Pages"
    
    def __eq__(self,other):
        return self.pages == other.pages

Book1 = Book("Python In A Nutshell",500)
Book2 = Book("JavaScript In A Nutshell",500)

print(len(Book1)) 
print(len(Book2)) 
print(str(Book1))
print(str(Book2)) 
print(Book1 == Book2) 


