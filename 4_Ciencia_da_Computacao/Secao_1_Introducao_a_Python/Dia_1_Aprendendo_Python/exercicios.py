import statistics


# Exercicio 1
def returns_greater_number(num1, num2):
    return max(num1, num2)


print(returns_greater_number(31, 30))


# Exercicio 2
def calculate_the_average(list_of_numbers):
    return statistics.mean(list_of_numbers)


print(calculate_the_average([2, 4, 6, 8, 10]))


# Exercicio 3
def print_square(num):
    index = 0
    while index < num:
        print("*" * num)
        index += 1


print_square(2)


# Exercicio 4
def returns_the_name_with_the_most_characters(name_list):
    biggest_name = ""
    for name in name_list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(
    returns_the_name_with_the_most_characters(
        ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
    )
)


# Exercicio 6
def what_type_of_triangle(side1, side2, side3):
    if (
        side1 + side2 <= side3
        or side1 + side3 <= side2
        or side2 + side3 <= side1
    ):
        return "não é triangulo"
    elif side1 == side2 == side3:
        return "Triângulo Equilátero"
    elif side1 == side2 or side1 == side3 or side2 == side3:
        return "Triângulo Isósceles"
    elif side1 != side2 != side3:
        return "Triângulo Escaleno"


print(what_type_of_triangle(1, 2, 3))
