// Assignment Code
var generateBtn = document.querySelector("#generate");
  // My list of chosen characters for the passwords.
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialChars = ["!","@","#","$","%","^","&","*"]
var numbersChars = ["0","1","2","3","4","5","6","7","8","9"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var index 
var passwordHub = []
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}



generateBtn.addEventListener("click", writePassword);


  var computerChoice = passwordHub[index];

 

  
  
  function generatePassword() {
    var length = prompt ("How long would you like your password? (must be between 8 and 128 chars)")
    if (length > 128) {
      alert(" Please Choose A Shorter Password, Honestly Who Needs a 129+ Character Long Password?")
     return 
    }
    if (length < 8) {
      alert("We want this password to be a bit stronger than that, there is power in numbers after all.")
    return
    }  
    var specialChoice = confirm ("Would you Like to include Special Characters?")
      if (specialChoice) {
        passwordHub.push(specialChars) 
      } 
    var lowerChoice = confirm ("Would you like lower case?")
      if (lowerChoice) {
        passwordHub.push(lowerCase)
      }
    var upperChoice = confirm ("Would you care for uppercase?")
      if (upperChoice) {
        passwordHub.push(upperCase) 
      }
    var numberChoice = confirm ("Would you like numbers as well?")
      if (numberChoice) {
        passwordHub.push(numbersChars)
        
           
      }
      
      if (passwordHub.length < 1) {
  alert ("Must atleast make 1 choice: Special Char, Uppercase, Lowercase, Numbers.")
 
    }

    var selectedArray = passwordHub.flat(1)
    
    var output = ""
    
    for (let i = 0; i < length; i++){
      var char = Math.floor(Math.random() * selectedArray.length);
      output = output + selectedArray[char]
    }
    return output
  
  }


  


 // function passwordSpecifics() {
  //   var length = prompt ("How long would you like your password?")
  //     if (length > 128) {
  //       alert(" Please Choose A Shorter Password, Honestly Who Needs a 129+ Character Long Password?")
  //      return 
  //     }
  //     if (length < 8) {
  //       alert("We want this password to be a bit stronger than that, there is power in numbers after all.")
  //     return
  //     }  
  //     var specialChoice = confirm ("Would you Like to include Special Characters?")
  //       if (specialChoice) {
  //         passwordHub.push(specialChars) 
  //       } 
  //     var lowerChoice = confirm ("Would you like lower case?")
  //       if (lowerChoice) {
  //         passwordHub.push(lowerCase)
  //       }
  //     var upperChoice = confirm ("Would you care for uppercase?")
  //       if (upperChoice) {
  //         passwordHub.push(upperCase) 
  //       }
  //     var numberChoice = confirm ("Would you like numbers as well?")
  //       if (numberChoice) {
  //         passwordHub.push(numbersChars)   
  //       }
        
  // if (passwordHub.length < 1) {
  //   alert ("Must atleast make 1 choice: Special Char, Uppercase, Lowercase, Numbers.")
  // }
        
        

        
  
  




        // Criteria for class GIVEN I need a new, secure password -
        //WHEN I click the button to generate a password -
        //THEN I am presented with a series of prompts for password criteria -
        //WHEN prompted for password criteria -
        //THEN I select which criteria to include in the password -
        //WHEN prompted for the length of the password 
        //THEN I choose a length of at least 8 characters and no more than 128 characters
        //WHEN asked for character types to include in the password
        //THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
        //WHEN I answer each prompt
        //THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page