from Calculator import Square


def test_Square():
    PassCount = 0
    FailCount = 0
    for Value in range(-1000,1000):
        try:
            assert Square(Value) == pow(Value,2)
        except:
            FailCount+=1
        else:
            PassCount+=1

