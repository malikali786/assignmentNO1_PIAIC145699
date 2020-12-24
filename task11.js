/*
The Temperature Converter: It’s hot out! Let’s make a converter
based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “N
oC is N
oF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “N
oF is N
oC”.

Conversion Formulae: 
C=(F-32)*5/9
F=(C*9/5)+32
*/

var c= 25;
var f= 70;

var celcius = (f-32)*5/9;
var fahrenheit = (c*9/5)+32;

document.write(c , "^C is ", fahrenheit, "^F");
document.write("<br>");
document.write(f , "^F in ", celcius, "^C");
