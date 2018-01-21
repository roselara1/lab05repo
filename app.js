"use strict";	
	/////////////////////////////////////
	/* Problem 1 (this is your demo that we'll solve in class)
	Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:
	"The sum of 4 and 7 is 11."
	Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/
	// Write your code here
	
	function sum(a, b) {
		function sum(a,b) {
			var add = (a + b);
			var mes1 = ('The sum of ' + a + ' and ' + b + ' is ' + add + '.');
			return [add, mes1]
		}
	
	// function sum(a, b) {
	//eslint-disable-line
	// }
		// Here is the test for sum(); uncomment it to run it
		testSum(4, 7);
		// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
		/////////////////////////////////////
		/* Problem 2
		Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
		"The product of 5 and 9 is 45."
		Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/
		// Write your code here
		function multiply (a,b){
			var multiplied = (a * b);
			var mes2 = ('The product of ' + a + ' and ' + b + ' is ' + multiplied + '.');
			return [multiplied, mes2];
		}
	
		// function multiply(a, b) {
		//eslint-disable-line
		// }
		// Here is the test for multiply(); uncomment it to run it
		testMultiply(5,9);
		// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
		/////////////////////////////////////
		/* Problem 3
		Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers, and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
		Third element: "4 and 7 and 5 sum to 16."
		Fourth element: "The product of 4 and 7 and 5 is 140."
		IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
		Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/
		// Write your code here
	
		function SumAndMultiply (a, b, c) {
			var ArraySM = a, b, c
			var sum3 = 0;
			for (var x = 0; x < ArraySM.length; x++){
				sum3 = sum(ArraySM[x], sum3)[0];
			
			var mes3 = (a + ' and ' + b + ' and ' + c + ' sum to ' + sum3 + '.');
			var mes4 = ('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplied + '.');
			for (var m = 1; m < ArraySM.length; m++){
			multiply3 = multiplied(ArraySM[m], multiply3)[1];
			return [sum3, mul3, a + ' and ' + b + ' and ' + c + ' sum to ' + sum + '.','The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplied + '.']
		}
		}
		}
		// function SumAndMultiply(a, b, c) {
		//eslint-disable-line
		// }
		// Here is the test for sumAndMultiply(); uncomment it to run it
		testSumAndMultiply(4, 7, 5);
	
		// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
		/////////////////////////////////////
		/* Problem 4
		Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
		"2,3,4 was passed in as an array of numbers, and 9 is their sum."
		IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.
		Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/
		// Write your code here
		var testArray = (2, 3, 4);

		function SumArray(testArray) {
			var total = sum(array4[y], total[0]);
			for (var y = 0; y<array4.length; y++){
			  total = sum(array4[y], total)[0];
			  
			var array4 = [sum, mes4]
			var mes4 = testArray + ' was passed in as an array of numbers, and '+ total +' is their sum.';
			var anotherarray = [total, mes4];
			return [array4]
			}
		//eslint-disable-line 
		// function sumArray(testArray) {
		//eslint-disable-line
		// }
		// Here is the test for sumArray(); uncomment it to run it
		testSumArray(2, 3, 4);
		// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
		/////////////////////////////////////
		/* Problem 5
		Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
		"The numbers 2,3,4 have a product of 24."
		IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
		Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/
		// Write your code here

		function MultiplyArray (testArray) {

			var total = 1;
			for (var z = 1; z <testArray.length; i++) {
				total = multiplied(testArray[z], total)[1];

				var mes5 = 'The numbers ' + testArray + ' have a product of ' + total + '.' );
				var array2 = (total, mes5);
				return [array2]
			}

		}

		// function multiplyArray(testArray) {
		//eslint-disable-line
		// }
		// Here is the test for multiplyArray(); uncomment it to run it
		testMultiplyArray(testArray);
	// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
