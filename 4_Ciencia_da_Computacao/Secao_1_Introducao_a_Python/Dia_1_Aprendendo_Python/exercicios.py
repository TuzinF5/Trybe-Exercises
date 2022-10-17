import statistics


# Exercicio 1
def returns_greater_number(num1, num2):
    return max(num1, num2)


print(returns_greater_number(31, 30))


# Exercicio 2
def calculate_the_average(list_of_numbers):
    return statistics.mean(list_of_numbers)


print(calculate_the_average([2, 4, 6, 8, 10]))
