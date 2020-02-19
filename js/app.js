// 'use strict';
// var guestScore = 0;
// var visitorName = prompt('WELCOME visitor! What is your name?');
// alert('Thank you for visiting ' + visitorName + '. We will get to know each other more!');
// var knowMore = prompt('Are you ready for a little Ice Breaker?   (Please enter yes/no OR y/n)').toLowerCase();
// if (knowMore === 'yes' || knowMore === 'y'){
//   alert('Sounds Great! Let\'s get started.');
//   guestScore++;
// } else if (knowMore === 'no' || knowMore === 'n'){
//   alert('Too bad! Get ready.');
// } else {
//   alert('Please answer yes/no');
// }
// console.log(knowMore);
// console.log(guestScore);
// var scndQ = prompt('Do you think I like the singer Post Malone?   (Please enter yes/no OR y/n)').toLowerCase();
// if (scndQ === 'yes' || scndQ === 'y'){
//   alert('You answered correctly.');
//   guestScore++;
// } else if (scndQ === 'no' || scndQ === 'n'){
//   alert('Wrong answer. I do!');
// } else {
//   alert('Please answer yes/no');
// }
// console.log(scndQ);
// console.log(guestScore);
// var thrdQ = prompt('Do I wear glasses?   (Please enter yes/no OR y/n)').toLowerCase();
// if (thrdQ === 'no' || thrdQ === 'n'){
//   alert('You answered correctly.');
//   guestScore++;
// } else if (thrdQ === 'yes' || thrdQ === 'y'){
//   alert('Wrong answer. I dont!');
// } else {
//   alert('Please answer yes/no');
// }
// console.log(thrdQ);
// console.log(guestScore);
// var frthQ = prompt('Is my hair long & black?   (Please enter yes/no OR y/n)').toLowerCase();
// if (frthQ === 'yes' || frthQ === 'y'){
//   alert('You answered correctly.');
//   guestScore++;
// } else if (frthQ === 'no' || frthQ === 'n'){
//   alert('Wrong answer. It is!');
// } else {
//   alert('Please answer yes/no');
// }
// console.log(frthQ);
// console.log(guestScore);
// var fifthQ = prompt('Do I like languages?   (Please enter yes/no OR y/n)').toLowerCase();
// if (fifthQ === 'yes' || fifthQ === 'y'){
//   alert('You answered correctly.');
//   guestScore++;
// } else if (fifthQ === 'no' || fifthQ === 'n'){
//   alert('Wrong answer. I do!');
// } else {
//   alert('Please answer yes/no');
// }
// console.log(fifthQ);
// console.log(guestScore);

// alert('Thank you ' + visitorName + ' for taking part in this Get2KnowMe game. Hope we got to break the ice already!');
// alert('Now it\'s time for a little guessing game ' + visitorName + '! You will try to guess my age to get access! I will give you hints ;)');

// var visitorGuess = prompt('Please note you have 4 chances to guess right! Go ahead and take your first guess:');
// for (let i = 0; i < 4; i++) {
//   visitorGuess = parseInt(visitorGuess);
//   console.log(visitorGuess);
//   if (visitorGuess === 21) {
//     guestScore++;
//     alert('You are correct!');
//     break;
//   } else if (visitorGuess > 19 && visitorGuess < 23 && visitorGuess !== 21) {
//     visitorGuess= prompt('You were very close! Please take another guess:');
//   } else if (visitorGuess >= 23) {
//     visitorGuess= prompt('Your guess was too high! Please take another guess:');
//   } else if (visitorGuess <= 19) {
//     visitorGuess= prompt('Your guess was too low! Please take another guess:');
//   } else {
//     prompt('Are you still there? Guess age here:');
//   }
//   if (i >= 3) {
//     alert('Hard Luck! I\'m 21');
//   }
// }
// console.log(guestScore);

// var singerList = ['lil wayne' , 'kendrick lamar' , 'post malone' , 'the weeknd'];
// var favSinger = prompt('Just one more step and you get there! For this question, you have 6 attempts to guess one of my favourite singers. Take a wild guess:').toLowerCase();
// var x = -1;
// for (var r = 0 ; r < 7 ; r++) {
//   for (var s = 0 ; s < singerList.length ; s++){
//     if (favSinger === singerList[s]) {
//       x = s;
//       break;
//     }
//   }
//   console.log(x);
//   if (x > -1) {
//     alert('You are right! The singer names were: ' + singerList);
//     guestScore++;
//     console.log(guestScore);
//     break;
//   } else {
//     favSinger = prompt('Sorry, you have to try again!');
//   }
// }
// if (x === -1) {
//   alert('The singer names were: ' + singerList);
// }
// alert('Thank you for baring with me, ' + visitorName + '! Your final score is: ' + guestScore + '/7');
// var inviteFrnd= document.getElementById('inviteFrnd');
// inviteFrnd.append('Thank you for visiting, ' + visitorName + '! Hope to see you again so soon! Do not hesitate to approach me!');
