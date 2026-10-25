//Problem statement
//score -0 to 100
//score > 90-> A
//score > 80 to 89-> B


let score= -1;
if (score > 100 || score<0){
    console.log("Invalid"); 
}
if (score > 90){
    console.log("Grade A - Excellent"); 
}
else if (score > 80 && score <= 90){
    console.log("Grade B - Very Good")
}
else if (score > 70 && score <= 80){
    console.log("Grade C - Good")
}
else{
    console.log ("FAIL");
}