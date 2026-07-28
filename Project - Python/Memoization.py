# Memoization : Top-Down Approach 
def climb_stairs_memo(n, memo={}):
    
    if n in memo:
        return memo[n]  # Return cached result - O(1) lookup!
    
    # Base cases
    if n <= 2:
        return n
    
    # Calculate once and store in memo for future use
    memo[n] = climb_stairs_memo(n-1, memo) + climb_stairs_memo(n-2, memo)

    return memo[n]

print(climb_stairs_memo(30))



