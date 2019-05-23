function scuberGreetingForFeet(ride){
   
 
   let message;
  
   if (ride <= 400) {
   	return message = 'This one is on me!';
   }	else if (ride > 400 && ride <= 2500) {
   return	message = 'I will gladly take your thirty bucks.';
   } else {

   return message = 'No can do.';
   } 
   }


function ternaryCheckCity(city){
 let message;
 return city === "NYC" ? message = "Ok, sounds good." : message = "No go.";

  // Write your code here!
}

function switchOnCharmFromTip(tip){
let message;
switch (tip){
 case 'generous':
 return message = "Thank you so much.";
 case 'not as generous':
 return message = "Thank you.";
 default:
 return message = 'Bye.';

}   


  // Write your code here!
}