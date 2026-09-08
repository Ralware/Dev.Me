import time

start = time.perf_counter()


def string_reverse_v1(input_string):
    return input_string[::-1]

def string_reverse_v2(input_string):
    reversed_string = ""
    for char in input_string:
        reversed_string = char + reversed_string
    return reversed_string

print(string_reverse_v1("Hello, World!")) # V1 : 0.0000751000 seconds | V2 : 0.0001009000 seconds

end = time.perf_counter()

print(f"Execution time: {end - start:.10f} seconds")

