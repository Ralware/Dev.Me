class Planet:
    def __init__(self,name,planet_type,star):
        if(isinstance(name,str)):
            self.name = name

        else:
            raise TypeError("name, planet type, and star must be strings")

        if(isinstance(planet_type,str)):
            self.planet_type = planet_type
            
        else:
            raise TypeError("name, planet type, and star must be strings")

        if(isinstance(star,str)):
            self.star = star
        else:
            raise TypeError("name, planet type, and star must be strings")
        # --------------------
        if(self.name.strip()==''):
            raise ValueError("name, planet_type, and star must be non-empty strings")
        if(self.planet_type.strip()==''):
            raise ValueError("name, planet_type, and star must be non-empty strings")
        if(self.star.strip()==''):
            raise ValueError("name, planet_type, and star must be non-empty strings")
        # ---------------------
        self.name = name
        self.planet_type = planet_type
        self.star = star
    
    def orbit(self):
        return f"{self.name} is orbiting around {self.star}..."

    def __str__(self):
        return f"Planet: {self.name} | Type: {self.planet_type} | Star: {self.star}"

planet_1 = Planet("Novaris", "Terrestrial", "Helios")
planet_2 = Planet("Zephyria", "Gas Giant", "Aster")
planet_3 = Planet("Cryon", "Ice Giant", "Polaris")

print(planet_1)
print(planet_2)
print(planet_3)

print(planet_1.orbit())
print(planet_2.orbit())
print(planet_3.orbit())