class Twitter:
   def __init__(self, content):
       self.content = content

   def post(self):
       return f"Tweet: '{self.content}'"

class Instagram:
   def __init__(self, content):
       self.content = content

   def post(self):
       return f"Instagram Post: '{self.content}'"

class LinkedIn:
   def __init__(self, content):
       self.content = content

   def post(self):
       return f"LinkedIn Article: '{self.content}'"

def start(social_media):
   print(social_media.post())  # Calls .post() on any object

# Instances
tweet = Twitter('Just Learned Python Polymorphism!')
photo = Instagram('Sunset Vibes')
article = LinkedIn('Why OOP Matters In 2026')

# The polymorphic calls - same function, different outputs
start(tweet) 
start(photo) 
start(article)