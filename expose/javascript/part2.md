# Question 1:
Line 12 prints "3". This is because var cannot be block- or loop-local, so "i" will only be visible after the for loop as a global variable when its value is 3.

# Question 2:
Line 13 prints "150". This is because discountedPrice is a var variable and is visible as a global variable after the for loop that it's declared in terminates. In the last iteration of the loop, discountedPrice is calculated to be 150, leading line 13 to print "150".

# Question 3:
Line 14 also prints "150". This is because finalPrice is a var variable and is visible to a global variable after the for loop it's delcared in terminates, similar to the discountedPrice variable. Because, in the last iteration of the loop, finalPrice is calculated to be 150, line 14 will return "150".

# Question 4:
This function will return the array "[50, 100, 150]" because the discounted variable is returned at the end of the function, which is a var variable that was declared within the scope of the function and is incremented in the for loop. The value of var cannot be block- or loop-local, so the value of the discounted variable of the last iteration of the for loop is the value that gets returned.

# Question 5:
This code causes an error because i is declared as a let variable within the scope of the for loop and will not be able to be referenced outside of the loop. So, because line 12 attempts to reference the variable outside of its scope of reference, the code throws an error.

# Question 6:
This code causes an error because discountedPrice is a let variable that is declared within the scope of the for loop and will not be able to be referenced outside of the loop. So, because line 13 attempts to reference the variable outside of its scope of reference, the code throws an error.

# Question 7:
Line 14 will return "150". This is because the finalPrice variable is a let variable that is declared within the scope of the function, so when line 14 attempts to reference the variable within the function it will be able to do so successfully and avoid errors. Additionally, because the finalPrice value is updated within the for loop, the finalPrice value that is returned will be the value of the variable during the last iteration of the for loop, which is 150.

# Question 8:
This function will return the array "[50, 100, 150]". This is because the function returns a let variable that's declared in the scope of the function, so when line 16 attempts to reference the variable within the function, it will be able to do so successfully and avoid errors. Additionally, because the discounted value is updated in the for loop, the discounted value that is returned will be the value of the variable during the last iteration of the for loop, which is [50, 100, 150]. 

# Question 9: 
Line 11 will cause an error in the code because the let variable i is defined only within the scope of the for loop in accordance with the scope properties of let variables, so when line 11 attempts to reference i outside of the scope of the for loop an error is thrown.

# Question 10:
Line 12 will return "3". This is because the const variable is declared within the scope of the function, so when line 12 attempts to reference the variable within the function it will be able to do so successfully without errors. The const variable is unable to be reassigned a value so it will remain its initial value of 3 throughout the function.

# Question 11:
The function will return the array "[50, 100, 150]" because although the const variable discounted is declared as an empty array at the beginning of the function, this does not make the variable immutable. So when the discounted variable gets new values added to it within the for loop of the function, the discounted variable will update its value without throwing an error.

# Question 12:
**A.** student.name
**B.** student['Grad year']
**C.** student.greeting()
**D.** student['Favorite Teacher'].name
**E.** student.courseload[0]


# Question 13:
**A.** Output: 32. This is because the "+" operator is used both for string concatenation and arithmetic addition, and because in JavaScript if one operand is a string, the other operand will convert to a string as well. So, because of this, this expression will result in the concatenation of the 2 strings "3" and "2", leading to the resulting answer of 32.
**B.** Output: 1. The "-" operator in JavaScript can only be used for numeric subtraction, so the expression will result in the numeric subtraction of 3 from 2, which is equal to 1.
**C.** Output: 3. Because neither of the operands are strings, the "+" operator is treated as a numerical addition operator. In JavaScript null is mapped to the numeric value 0, so numerically adding 3 and null is equivalent to numerically adding 3 and 0, which is equal to 3.
**D.** Output: 3null. The "+" operator can be used in both string concatenation or numerical addition, but because one of the operands is a string, the "+" operator will be used for string concatenation between the two string equivalents of the operands, which will result in 3null. 
**E.** Output: 4. Because neither operand is a string, the "+" operator is used strictly for numerical addition in this expression. The boolean True is mapped to the numerical value of 1, so adding true and 3 together is the same as adding 1 and 3 together, which will result in an answer of 4.
**F.** Output: 0. Because neither operand is a string, the "+" operator is used strictly for numerical addition in this expression. Both false and null are mapped to a numerical value of 0, so the numerical addition of both values would be equivalent to adding 0 to 0, which is equal to 0.
**G.** Output: 3undefined. The "+" operator can be used in both string concatenation or numerical addition, but because one of the operands is a string, the "+" operator will be used for string concatenation between the two string equivalents of the operands, which will result in 3undefined. 
**H.** Output: NaN. Because neither operand is a string, the "+" operator is used strictly for numerical addition in this expression. However, because undefined does not have a numerical equivalent value, the expression will output NaN.

# Question 14: 
**A.** Output: true. When comparing the values of 2 different types, JavaScript converts the values into numerical values. So when comparing '2' and 1, Javascript changes 2 to the numerical value of 2 and 2 is greater than 1, so the comparison returns true.
**B.** Output: false. When comparing the values of 2 string types, JavaScript returns the lexicographical comparison result. Because the string '2' is lexicographically larger than the string '12', the output of the comparison is false.
**C.** Output: true. Because the values are of different types, JavaScript converts both of them to numerical values and then compares them. Because 2 == 2 is true, the output will be true.
**D.** Output: false. The operator "===" means that JavaScript will not adjust the types of the values for comparison, so 2 will stay a numerical value and '2' will stay a string, and because the 2 values are different types and different values the comparison will return false.
**E.** Output: false. Since the operator "==" is used, JavaScript will convert both of the values into numerical values. The boolean true is mapped to the numerical value of 1, and 1 is not equal to 2, so the comparison will output false.
**F.** Output: true. The operator "===" is used, so JavaScript will not try to convert the types of any values. The Boolean() function will convert the value of 2 to be true, so because true is equal to true both in value and type, the comparison will output true.

# Question 15
When the "==" operator is used, JavaScript can potentially convert the types of the different values used in the comparison. However, when the "===" operator is used, JavaScript is incapable of converting the types of the different values in the comparison.

# Question 17
The function should return the array "[2,4,6]". This is because as the function is pushing values into the array, it's actively calling the doSomething function to calculate those values using callback, in which the doSomething function multiplies the original array value by 2. So, the function will return this array of modified values.

# Question 19
The function will print 1 and 4 instantly because neither of them are delayed being printed when the function is called. 1 will be printed first because it is above the line where 4 is printed. Then 3 will be printed after 1 and 4 are printed because it is within setTimeout, so it will be placed on a queue to run at the next opportunity, not immediately. Finally, 2 will be printed because it has the longest delay of 1 second.