//Creating a password 

//var password = prompt ("Welcome the user to the password validator tool")


//numsArr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 0]
//lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' , 'p', 'q', 'r', 's', 't', 'v', 'u', 'w', 'x', 'y', 'z']

//for (let i = 0; i <= 10; i++){
//    if (nummArr[i] >= 10 && lettersArr[i] >= 10){
 //       console.log("Acceptable Password")
  //  }
//}


var password = prompt ("Welcome the user to the password validator toll")

function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct')
return true;
}
else
{ 
alert('Incorrect')
return false;
}
}

