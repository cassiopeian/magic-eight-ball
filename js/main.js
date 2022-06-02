let isX = false;

// nudge the pool cues independently, on hover
function nudgeCues(cue, wait) {
  $(cue)
  .stop(true)
  .delay(wait)
  .animate({left: '10px'}, 400)
  .queue(function() {
      $(cue).animate({left: '-15px'}, 400).dequeue()
  })
  .queue(function() {
      $(cue).animate({left: ''}, 400).dequeue()
  })
  .removeAttr('style');
};

$('#hamburger').on('click', function() {
  if (isX === true) {
    // hide the nav
    $('nav').animate({right: '-100%'}, 750);

    // remove the pool cue transformations
    $('#top-cue').removeClass('rotate-top-cue');
    $('#middle-cue').removeClass('hide-middle-cue');
    $('#bottom-cue').removeClass('rotate-bottom-cue');
    
    // so the x is a hamburger again
    isX = false;
  } else if (isX === false) {
    // display the hidden nav
    $('nav').animate({right: 0}, 750);

    // add the pool cue transformations
    $('#top-cue').addClass('rotate-top-cue');
    $('#middle-cue').addClass('hide-middle-cue');
    $('#bottom-cue').addClass('rotate-bottom-cue');
    
    // so the hamburger is now an x
    isX = true;
  } 
});


// ----------------- 
// MAGIC EIGHT BALL
// -----------------

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
  $('#ball-response').hide().fadeIn(1000).html(eightBall);
  
  // log the user's question
  console.log(`You asked, "${userQuestion}"`);
  // log the eight ball's response
  console.log(`The mystic Magic Eight Ball says, "${eightBall}"`);
});

// remove the shake animation, so it can be reapplied
$('#ball-front').on('animationend', function() {
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
  // play the 'rolled' keyframes animation
  $('#die-face').addClass('rolled');

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
    case 2:
      // hide the top and bottom rows of dots
      $('.row-one, .row-three').css('display', 'none');
      // show two middle-row dots
      $('.row-two').css('display', 'block');
      hideNamedDots();
      break;
    case 3:
      // hide all the dots...
      $('.dot').css('display', 'none');
      // except three diagonal ones
      $('#top-right, #one, #bottom-left').css('display', 'block');
      break;
    case 4:
      hideNamedDots();
      // hide the middle row of dots
      $('.row-two').css('display', 'none');
      // show the top and bottom rows of dots
      $('.row-one, .row-three').css('display', 'block');
      break;
    case 5:
      hideNamedDots();
      // hide the middle row of dots
      $('.row-two').css('display', 'none');
      // show the top and bottom rows of dots
      $('.row-one, .row-three').css('display', 'block');
      // show the middle dot
      $('#one').css('display', 'block');
      break;
  }

  if (randomDieFace === 0) {
    console.log(`You rolled a 6!`);
  } else {
    console.log(`You rolled a ${randomDieFace}!`);
  }
});

// reset the 'rolled' keyframes animation
$('#die-face').on('animationend', function() {
  $(this).removeClass('rolled');
});