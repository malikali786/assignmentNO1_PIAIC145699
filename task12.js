/*
Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
convert the total currency to Pakistani Rupees. Perform all
calculations in a single expression. (Exchange rates : 1 US Dollar =
155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)
*/


var usd=10, riyal=25, usdToPkr= usd*155, riyalToPkr= riyal*41, totalCurrency= usdToPkr+riyalToPkr;

document.write("Total Currency in PKR: ", totalCurrency);




