def square_root_bisection(number,tolerance=0.001,iterations=25):
    
    if number < 0 :
        raise ValueError("Square root of negative number is not defined in real numbers")
    
    elif number == 1 or number == 0 :
        print(f"The square root of {number} is {number}")
        return number
    
    else:
        low = 0
        high = max(1,number)
        sqrt_number = 0
        iterations_done = 0

        while iterations_done < iterations:
            mid = (low+high)/2.0

            if mid**2 > number :
                high = mid
            
            else :
                low = mid
            
            if high - low <= tolerance:
                
                sqrt_number = mid
                print(f"The square root of {number} is approximately {sqrt_number}")
                return mid
    
            iterations_done +=1
        
        print("Failed to converge within 10 iterations")


square_root_bisection(0.25, 1e-7, 50)