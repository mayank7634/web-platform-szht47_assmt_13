const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = document.getElementById('number-input1').value;

  
    numberInput1 = parseInt(numberInput1); // Convert input to integer
  
    // Using if-else to determine the comment based on the score
    if (numberInput1 < 0 || numberInput1 > 100) {
      message1 = "This is not possible. An error has occurred.";
    } else if (numberInput1 >= 0 && numberInput1 <= 19) {
      message1 = "That was a terrible score!";
    } else if (numberInput1 >= 20 && numberInput1 <= 39) {
      message1 = "You know some things. Needs improvement.";
    } else if (numberInput1 >= 40 && numberInput1 <= 69) {
      message1 = "You did a passable job, not bad!";
    } else if (numberInput1 >= 70 && numberInput1 <= 89) {
      message1 = "That’s a great score. You really know your stuff.";
    } else if (numberInput1 >= 90 && numberInput1 <= 100) {
      message1 = "What an amazing score!";
    }
  
    
  
  commentContainer1.innerHTML = message1;
};

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = document.getElementById('number-input2').value;

  
    numberInput2 = parseInt(numberInput2); // Convert input to integer
  
    // Using switch to determine the comment based on the score
    switch (true) {
      case (numberInput2 < 0 || numberInput2 > 100):
        message2 = "This is not possible. An error has occurred.";
        break;
      case (numberInput2 >= 0 && numberInput2 <= 19):
        message2 = "That was a terrible score!";
        break;
      case (numberInput2 >= 20 && numberInput2 <= 39):
        message2 = "You know some things. Needs improvement.";
        break;
      case (numberInput2 >= 40 && numberInput2 <= 69):
        message2 = "You did a passable job, not bad!";
        break;
      case (numberInput2 >= 70 && numberInput2 <= 89):
        message2 = "That’s a great score. You really know your stuff.";
        break;
      case (numberInput2 >= 90 && numberInput2 <= 100):
        message2 = "What an amazing score!";
        break;
    }
  

  commentContainer2.innerHTML = message2;
};
