# name = input("Enter your name : ")
# age = input("Enter your age : ")
# gender = input("Enter your gender : ")
# address = input("Enter your address : ")
# contact = input("Enter your phone number : ")
# print("===============================")
# print("Name : ", name)
# print("Age : ", age)
# print("gender : ", gender)
# print("Address : ", address)
# print("Contact : ", contact)

# str = "Saliram"
# print(str.split()

#type Check
# a = 505
# print(type (a))
# Type Casting

# a = int (input("Enter number a : "))
# b = int (input("Enter number b : "))
# c = a + b
# print("Sum is : ", c)

# Sum of thwo number with type casting
# a,b = map(int, input("Enter two number : ").split(','))
# print(a+b)


# Seperte value
# a = 10
# b = 20
# print('Value is ', a , b , sep=':', end='.....')


# formate string

# a = 5
# b = 10
# c = a + b
# print("Sum of number %i and %i is : %i" %(a,b,c))

# String format
# name = "Saliram Chaudhary"
# age = 22
# gender = "male"
# str_template = "Name is {name}, age is {age}, and gender is {gender}"
# print(str_template.format(name=name, age=age, gender=gender))

# x = 15//2
# print(x) output : 7

# Program of find greater number
a = 10
b = 30
c = 20

if a > b and a > c :
    greatest = a
elif b > a and b > c :
    greatest = b
else :
    greatest = c

print("The greatest number is :",greatest)

# Program of find smallest number
if a < b and a < c :
    smallest = a
elif b < a and b < c :
    smallest = b
else : 
    smallest = c

print("Smallest number is :",smallest)