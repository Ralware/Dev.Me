class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self,inp_str):
        ascii_sum = 0
        for val in inp_str:
            ascii_sum += ord(val)
        return ascii_sum
    
    def add(self, key, val):
        index = self.hash(key)

        if index in self.collection:
            self.collection[index][key] = val
        else:
            self.collection[index] = {key: val}
    
    def remove(self,key):

        index = self.hash(key)

        try :
            if index in self.collection:
                del self.collection[index][key]
            else:
                return None
        except:
            pass

        
    
    def lookup(self,key):
        
        index = self.hash(key)

        try :
            if index in self.collection:
                return self.collection[index][key]
            else:
                return None
        except:
            pass