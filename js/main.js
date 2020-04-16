let username = 'Baloo';
// Set a username

username ?
  console.log(`Hello, ${username}!`) :
  console.log ('Hello, stranger!');
// Ternary expression decides what to output depending on user's choice of username

const userQuestion = 'Will humans ever live on Mars?';
console.log(`${username} asks: ${userQuestion}`);
// This is the user's question

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

console.log(`The mystic Magic Eight Ball says, ${eightBall}`);

/* 8 BALL ANIMATION */
