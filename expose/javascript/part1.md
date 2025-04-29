# Question 1:
Line 9 of the code prints "values added: 20".

# Question 2:
Line 13 of the code prints "final result: 20".

# Question 3:
You should NOT use var because regardless of what block a var is defined in, it can be accessed anywhere it's defined, which leads to scoping issues. In this block of code, var is 20 both inside and outside of the if function block causing the function to not work as expected.

# Question 4:
Line 9 prints "values added: 20".

# Question 5:
Line 13 returns an error because the result is a let variable that is only defined within the if block and consequently is not defined outside of the scope of the if block. Because Line 13 is trying to reference the result variable where it is not defined, the line throws an error.

# Question 6:
The code throws an error because result is initially declared as a const variable, which cannot be reassigned after it is assigned the first time, and on line 7 of the code the code tries to reassign the const result variable a value other than its originally assigned value of 0. 

# Question 7:
Line 13 will cause the code to throw an error because the const variable is declared within the if block, meaning that its scope only applies to within the if block. In line 13, the code attempts to reference the const variable outside of the if block where it is not defined so the code throws an error.
