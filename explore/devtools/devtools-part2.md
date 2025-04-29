# Question 1:
The bug was that both num1 and num2 were strings and when they were added together using the "+" operator, the two string variables would be concatenated in the result variable as a string instead of the numerical sum between the two values being stored in the result variable. 

# Question 2:
To fix the bug, I would just change num1 and num2 to be numerical variables instead of strings, so that the result variable will store the numerical sum of num1 and num2 instead of their concatenation.