/*
What will be the output in variables a, b & result after execution of
the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
*/

var a = 2;//2//1//0//-1//
var b = 1;//0//-1//0//


c= --a;//1
document.write("a is: ", a, "<br>");
document.write("b is:", b, "<br><br>");
document.write("Result is: ", c, "<br><br>");

d=--a - --b;
document.write("a is: ", a, "<br>");
document.write("b is:", b, "<br><br>");
document.write("Result is: ", d, "<br><br>");

e=--a - --b + ++b;
document.write("a is: ", a, "<br>");
document.write("b is:", b, "<br><br>");
document.write("Result is: ", e, "<br><br>");

result= --a - --b + ++b + b--;
document.write("a is: ", a, "<br>");
document.write("b is:", b, "<br><br>");
document.write("Result is: ", result, "<br><br>");