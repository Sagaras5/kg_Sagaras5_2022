//get the array of nubers entered
const args = process.argv.slice(2);

//Initiate the string mapping
var stringValues = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//iniotiating final string array
var stringArray = '';

//commit 3

//iterating through the given array of numbers
for(i=0; i< args.length; i++)
{
    var stringEquivalentOfNum = '', j = 0;

    //for each given number
    while(j< args[i].length)
    {
        var indexVal = parseInt( args[i].charAt(j));

        //fetch string equivalent of num
        stringEquivalentOfNum += stringValues[indexVal];
        j++;
    }
    
    if(i == 0)
    stringArray = stringEquivalentOfNum;
    else
    stringArray = stringArray + ',' + stringEquivalentOfNum;
}
console.log(stringArray);//print the final value