/*
Write a program to take a number in a variable, do the required
arithmetic to display the following result in your browser:
*/

var a = 10;

document.write("Result:","<br>");
document.write("The Value of a is: ", a, "<br>");
document.write("...............................................","<br><br>");

++a;
document.write("The Value of ++a is: ", a, "<br>");
document.write("Now the value of a is:", a, "<br><br>");

b=a++;
document.write("The Value of a++ is: ", b, "<br>");
document.write("Now the value of a is:", a, "<br><br>");

c=--a;
document.write("The Value of --a is: ", c, "<br>");
document.write("Now the value of a is:", a, "<br><br>");

d=a--;
document.write("The Value of a-- is: ", d, "<br>");
document.write("Now the value of a is:", a, "<br><br>");