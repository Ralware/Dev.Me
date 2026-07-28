import sys as System
import math as Math
import random as Random
import statistics as Stats
import cowsay as CowSays

def RandomStatistics():
    Heads = 0
    Tails = 0
    for _ in range(0,10000):
        Outcome = Random.choice(["Heads","Tails"])
        if(Outcome == "Heads"):
            Heads += 1
        else:
            Tails += 1
    return f"Heads : {Heads} | Tails : {Tails}"

print(RandomStatistics())
print(Math.sqrt(16))
print(Stats.mean([1,2,3,4,5]))
CowSays.cow("Wallah")