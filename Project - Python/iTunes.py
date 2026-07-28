import requests as Request

def GetSong():
    Artist = input("Enter The Artist Name : ")
    Result = Request.get("https://itunes.apple.com/search?entity=song&limit=100&term="+Artist)
    Dictionary =  Result.json()
    Data = set()
    for Key in Dictionary["results"]:
        Data.add(Key["trackName"].lower())
    print("--------------- Songs ---------------")
    for Element in Data:
        print(Element.title())
    print("------------------------------")
