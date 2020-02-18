'use strict';
var visitorName = prompt('WELCOME visitor! What is your name?');
alert('Thank you for visiting ' + visitorName + '. We will get to know each other more!');
var knowMore = prompt('Are you ready for a little Ice Breaker?').toLowerCase();
if (knowMore === 'yes' || knowMore === 'y'){
  //console.log('Sounds Great! Let us get started.');
  alert('Sounds Great! Let us get started.');
} else if (knowMore === 'no' || knowMore === 'n'){
  //console.log('Too bad! Get ready.');
  alert('Too bad! Get ready.');
} else {
  //console.log('Please answer yes/no');
  alert('Please answer yes/no');
}
var scndQ = prompt('Do you think I like the singer Post Malone?').toLowerCase();
if (scndQ === 'yes' || scndQ === 'y'){
  //console.log('You answered correctly.');
  alert('You answered correctly.');
} else if (scndQ === 'no' || scndQ === 'n'){
  //console.log('Wrong answer. I do!');
  alert('Wrong answer. I do!');
} else {
  //console.log('Please answer yes/no');
  alert('Please answer yes/no');
}
var thrdQ = prompt('Do I wear glasses?').toLowerCase();
if (thrdQ === 'no' || thrdQ === 'n'){
  //console.log('You answered correctly.');
  alert('You answered correctly.');
} else if (thrdQ === 'yes' || thrdQ === 'y'){
  //console.log('Wrong answer. I dont!');
  alert('Wrong answer. I dont!');
} else {
  //console.log('Please answer yes/no');
  alert('Please answer yes/no');
}
var frthQ = prompt('Is my hair long & black?').toLowerCase();
if (frthQ === 'yes' || frthQ === 'y'){
  //console.log('You answered correctly.');
  alert('You answered correctly.');
} else if (frthQ === 'no' || frthQ === 'n'){
  //console.log('Wrong answer. It is!');
  alert('Wrong answer. It is!');
} else {
  //console.log('Please answer yes/no');
  alert('Please answer yes/no');
}
var fifthQ = prompt('Do I like languages?').toLowerCase();
if (fifthQ === 'yes' || fifthQ === 'y'){
  //console.log('You answered correctly.');
  alert('You answered correctly.');
} else if (fifthQ === 'no' || fifthQ === 'n'){
  //console.log('Wrong answer. I do!');
  alert('Wrong answer. I do!');
} else {
  //console.log('Please answer yes/no');
  alert('Please answer yes/no');
}
alert('Thank you ' + visitorName + ' for taking part in this. We hope to see you again soon!');

var inviteFrnd= document.getElementById('inviteFrnd');
inviteFrnd.append('Thank you for taking this quiz ' + visitorName + '! Do not hesitate to approach me!');
