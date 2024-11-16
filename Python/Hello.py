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

 #x = 15//2 
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
# a = [10,20,30,40,50]
# s = int(input("Enter a number : "))
# print("Valid Search") if(s in a) else print("Invalid Search")

# Condition Statement
# print("===============Menu===============")
# print("1.Min\n2.Max\n3.Swap")
# print("==================================")
# choice = int(input("Enter your choice number : "))
# if(choice == 1):
#     a = int(input("Enter numbe a : "))
#     b = int(input("Enter numbe b : "))
#     print("Minimum number is :", min(a,b))
# elif(choice == 2):
#     a = int(input("Enter numbe a : "))
#     b = int(input("Enter numbe b : "))
#     print("Maximum number is :", max(a,b))
# elif(choice == 3):
#     a = int(input("Enter numbe a : "))
#     b = int(input("Enter numbe b : "))
#     print("Before swapping : %d %d"%(a,b))
#     a,b = b,a
#     print("After swap is : %d %d"%(a,b))
# else:
#     print("Invalid Choice")

# Loop
# n = int(input("Enter number : "))
# i = 1
# while i <= n :
#     print(i,end=" ")
#     # print(i*i,end=" ")
#     i += 1

# Wap to print table of number
# n = int(input("Enter a number : "))
# i = 1
# while i <= 10 :
#     print( n , "*" , i , "=" ,i * n)
#     i += 1

# Wap to print fibonacii series
# a = 0
# b = 1
# n = int(input("Enter number : "))
# i = 0
# while i < n :
#     c = a + b
#     a = b
#     b = c
#     print(c,end=" ")
#     i += 1

#Wap to print factorial of number 
# n = int(input("Enter a number : "))
# fact = 1
# while n != 0 :
#     fact *= n
#     n = n - 1
# print("Factorial number is : ",fact)

# Wap to check palindrone number or not
# The original number and output number which are equal called palindrone number.
# n = int(input("Enter a number : "))
# s = 0
# m = n #eg : 252 , 121
# while(n != 0):
#     r = n % 10
#     s = s * 10 + r
#     n = n // 10
# print("Palindrone number") if(m == s) else print("Not a palindrone number")

# Wap to check number is armstrong number or not
#The number which are each self cube number sum is equalto user input
# n = int(input("Enter a number : "))
# m = n #eg 153 => 1^3 = 1, 5^3 = 125 , 3^3 = 27 => 1 + 125 + 27 = 153 == 153
# s = 0
# while(n != 0):
#     r = n % 10
#     s = s + (r*r*r)
#     n = n // 10
# if m == s :
#     print("Armstrong number")
# else :
#     print("Not Armstrong number")

# For loop
# for i in range(50):
#     print(i,end=" ")

# for i in range(1,51):
#     print(i,end=" ")

# for i in range(10):
#     print(i*i,end=" ")

# n = int(input("Enter number : "))
# for i in range(1,11):
#     print(n , "*" , i , "=" , i * n)

# for i in range(10,0,-1): # reverse loop
#     print(i)

# Table 
# n = int(input("Enter a number : "))
# for i in range(1,n,1):
#     print("\nTable of :",i)
#     for j in range(1,11,1):
#         print(i , "*" , j , "=" , i * j)

# Pattern print
# n = int(input("Enter number :"))
# for i in range(1,n,1):
#     for j in range(1,i+1,1):
#         print("*",end=" ")
#     print()

num = int(input("Enter number : "))
print("Number is even" if num % 2 == 0 else "Number is odd")