$('.submit').on('click', function() {
  const userQuestion = $('#question').val();
  const randomNumber = Math.floor(Math.random() * 8); 
  let eightBall = '';

  // assign an eight ball response to each of randomNumber's possible values 
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

  // add the shake animation, while the back of the ball replaces the front
  $('#ball-front').addClass('shake').attr('src', 'images/8-ball-back-01.svg');
  // shake the response text, too, as it fades into focus
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

$('#ball-response').on('click', function() {
  const ballFront = $('#ball-front');
  const ballResponse = $('#ball-response');

  // if the back of the ball is showing
  if (ballFront.attr('src') === 'images/8-ball-back-01.svg') {
    // hide the response text
    ballResponse.hide();
    // and replace the back image with the front 
    ballFront.attr('src', 'images/8-ball-face-01.svg');
  }
});


// --------------- 
// SIX-SIDED DIE
// ---------------

function hideNamedDots() {
  $('#top-right, #one, #bottom-left').css('display', 'none');
};

$('#roll-die').on('click', function() {
  const randomDieFace = Math.floor(Math.random() * 6);

  switch (randomDieFace) {
    case 0:
      hideNamedDots();
      // show all the dots...
      $('.dot').css('display', 'block');
      // except the one in the middle
      $('#one').css('display', 'none');
      break;
    case 1:
      hideNamedDots();
      // hide all the dots...
      $('.dot').css('display', 'none');
      // except the one in the middle
      $('#one').css('display', 'block');
      break;
  }

  if (randomDieFace === 0) {
    console.log(`You rolled a 6!`);
  } else {
    console.log(`You rolled a ${randomDieFace}!`);
  }
});