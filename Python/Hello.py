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

# TYPE CHECK
# a = 505
# print(type (a))
# TYPE CASTING

# a = int (input("Enter number a : "))
# b = int (input("Enter number b : "))
# c = a + b
# print("Sum is : ", c)

# EXAMPLE OF TYPE CASTING 
# a,b = map(int, input("Enter two number : ").split(','))
# print(a+b)


# VALUE SEPERATION
# a = 10
# b = 20
# print('Value is ', a , b , sep=':', end='.....')


# FORMAT STRING

# a = 5
# b = 10
# c = a + b
# print("Sum of number %i and %i is : %i" %(a,b,c))

# STRING FORMAT
# name = "Saliram Chaudhary"
# age = 22
# gender = "male"
# str_template = "Name is {name}, age is {age}, and gender is {gender}"
# print(str_template.format(name=name, age=age, gender=gender))

# x = 15//2
# print(x) output : 7

# CHECK GREATER NUMBER 
# a = 10
# b = 30
# c = 20

# if (a > b and a > c) :
#     greatest = a
# elif (b > a and b > c) :
#     greatest = b
# else :
#     greatest = c

# print("The greatest number is :",greatest)

# CHECK SMALLEST NUMBER 
# if (a < b and a < c) :
#     smallest = a
# elif (b < a and b < c) :
#     smallest = b
# else : 
#     smallest = c

# print("Smallest number is :",smallest)

# BOOLEAN
# print('Hello') if( 55 > 10) else print('Bye')

# WAP TO ENTER A NUMBER IS POSITIVE OR NEGATIVE
# a = int(input("Enter a number : "))
# print("Number is positive") if(a >= 0) else print("Number is negative")

# WAP TO ENTER A NUMBER IS EVEN OR ODD
# n = int(input("Enter a number : ")) 
# print("Even") if(n % 2 == 0) else print("Odd")


# ARITHMETIC ASSIGN OPERATOR
# a = 50
# a += 10 # 60
# a -= 10 # 40
# print(a) 

# MEMBERSHIP OPERATOR 
# s = "saliram chy"
# print('s' in s) #output : true
# print('z' in s) #output : false
# print('chy' in s) #output : true

# email = "saliramchaudhary1@gmail.com"
# print('Valid email') if('saliramchaudhary1@gmail.com' in email) else print('Invalid email')
# print('Invalid email') if('email' not in email) else print('Valid email')

# ARRAY SEARCH CHECK USING MEMBERSHIP OPERATOR      
a = [10,20,30,40,50]
s = int(input("Enter a number : "))
print("Valid Search") if(s in a) else print("Invalid Search")