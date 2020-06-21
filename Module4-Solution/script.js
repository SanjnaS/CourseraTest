//EXPECTED OUTPUT ON CONSOLE
/*Hello Harry
Good Bye James
Good Bye Jenifer
Good Bye Jessie
Hello Paul
Hello Kevin
Hello Lupin
Hello Sirius
Hello Lily
Good Bye Jim
*/

(function () {

var names = ["Harry", "James", "Jenifer", "Jessie", "Paul", "Kevin", "Lupin", "Sirius", "Lily", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
