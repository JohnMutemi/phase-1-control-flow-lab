function scuberGreetingForFeet(feetDistance){
  // Write your code here!
    if (feetDistance <= 400) {
      return "This one is on me!";
    }
    else if(feetDistance > 400 && feetDistance <= 2000) {
      return "That will be twenty bucks.";

    }
    else if(feetDistance > 2000 && feetDistance <= 2500){
      return "I will gladly take your thirty bucks.";

    }
      
     else {
      return "No can do.";
    }
  }
  
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  return city==='NYC'?'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return"Thank you so much.";
    case 'not as generous':
      return"Thank you.";
    default:
      return"Bye.";
  }
}