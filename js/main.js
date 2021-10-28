const ballFront = $('#ball-front');
const ballResponse = $('#ball-response');

$('.submit').on('click', function() {
  const userQuestion = $('#question').val();

  const randomNumber = Math.floor(Math.random() * 8); 
  // Creates a random number between 0 and 7, to correlate with the possible Magic Eight Ball answers

  let eightBall = '';
  // A variable for the MEB's response

  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain.';
      break;
    case 1:
      eightBall = 'It is decidedly so!';
      break;
    case 2:
      eightBall = 'Reply hazy; try again...';
      break;
    case 3:
      eightBall = 'Cannot predict now...';
      break;
    case 4:
      eightBall = 'Do not count on it.';
      break;
    case 5:
      eightBall = 'My sources say no.';
      break;
    case 6:
      eightBall = 'Outlook not so good.';
      break;
    case 7:
      eightBall = 'Signs point to yes!';
      break;
  }
  // Allows the MEB to spit out a random response

  $('#ball-front').addClass('shake').attr('src', 'images/8-ball-back-01.svg');
  $('#ball-response').addClass('shake').hide().fadeIn(1000).html(eightBall);
  
  // log the user's question
  console.log(`You asked, "${userQuestion}"`);
  // log the eight ball's response
  console.log(`The mystic Magic Eight Ball says, "${eightBall}"`);
});

// remove the shake animation, so it can be reapplied
$('#ball-front, #ball-response').on('animationend', function() {
  $(this).removeClass('shake');
}); 

/* TO "RESET"/TURN THE BALL */

$('#ball-response').on('click', function() {
  if (ballFront.attr('src') === 'images/8-ball-back-01.svg') {
    ballResponse.hide();
    ballFront.attr('src', 'images/8-ball-face-01.svg');
  }
});