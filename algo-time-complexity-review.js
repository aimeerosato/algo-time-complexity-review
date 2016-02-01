// Where find source code for native methods in JS?

/////////// Prompt 1 ///////////
/////////// time complexity:
// n * (1 + 1) = n
// 0(n) Linear 

function findMax(array){
  var max = -Infinity;  
  for (var i = 0; i < array.length; i++){  //n
    if (array[i] > max){ //1
      max = array[i]; // 0 or 1
    }
  }
  return max; 
}


/////////// Prompt 2 ///////////
/////////// time complexity: 
// n - indexOf loops through whole array to either find target or return -1 
// 1 - return statement does comparison
// drop 1 coefficient
// Time complexity 0(n)
function contains(array, target){
  return array.indexOf(target) > -1;
}


/////////// Prompt 3 ///////////
/////////// time complexity:
// O(n) - Linear
// Worst case still has to go through everything

function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;
}

/////////// Prompt 4 ///////////
/////////// time complexity: 
// O(1) - constant b/c loop runs 3 times no matter how large problem size is
// Number of operations are proportional to size of problem

function square(array){
  for (var i = 0; i < 3; i++){  // 1
    array[i] = array[i] * array[i];  // 1
  }
  return array; //1
}


/////////// Prompt 5 ///////////
/////////// time complexity: 
// O (n) - Linear
// 15n
// 
function repeat(array){
  var repeat = []; //1
  for (var j = 0; j < 10; j++){ // 1 * 10
    repeat[j] = []; // + 1
    for (var i = 0; i < array.length; i++){ // * n
      repeat[j].push(array[i]); //+ 1
    }
  }
  return repeat; // 1
}
//what if we replace 10 with a parameter (n)?  O(n^2)
// Quadratic  - number of problems proportional to square of problem size


/////////// Prompt 6 ///////////
/////////// time complexity: 
// 0(n) - Linear 

//7n
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number // 1 
    var temp = num1;// 1 or 0
    num1 = num2; // 1 or 0
    num2 = temp; // 1 or 0 
  }
  for (var i = num1; i > 1; i--){ // * n
    if (num1 % i === 0 && num2 % i === 0){  // 1
      return i; // 1 or 0
    }
  }
  return 1; // 1 or 0
}


/////////// Prompt 7 ///////////
/////////// time complexity: 
//O(n^2) - Quadratic
// Operations are proportional to square of problem size
//  Nested for loop, looking at each character, and then comparing it 
//  with every other character in the string (via second loop), and 
//  counting them.  It's also storing the character as the key, and the 
//  count as the value in an object.
function countChar(string){
  var counts = {}; //1
  var currChar, currCharCount; //1
  for (var i = 0; i < string.length; i++){ //n
    currChar = string[i]; //1
    currCharCount = 1; //1
    for (var j = i+1; j < string.length; j++){ //n
      if (currChar === string[j]){  //1
        currCharCount++; //1 or 0
      }
    }
    if (!counts.hasOwnProperty(currChar)){ // 1 
      counts[currChar] = currCharCount; // 0
    }
  }
  return counts; //1
}


/////////// Prompt 8 ///////////
/////////// time complexity:
// O(n) - Linear
// Say want to find factorial of 10, even w/ recursive call will only run 9 more times
var factorial = function(num){
  if (num < 0){ //1 or 0
    return; //1 or 0
  }
  if (num === 0 || num === 1){ //1 or 0
    return 1; //1 or 0
  } else {
    return num * factorial(num-1);  //n
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: 
// O(n) - Linear
function tournament(players){
  var results; //1
  if (players.length < 3){ //1
    return players[0]; //1 or 0
  } else { //1 or 0
    results = hotPotato(players);  //n - depends on players?
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);  //1
  }
}



/////////// Prompt 10 ///////////
/////////// time complexity: 
// O(c^n) Exponential
// c = constant number of possible characters that could be in the password
// n = max length the password could be

function allPasswords(allowedChars, maxLength){
  var results = []; //1

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){  //1
      results.push(currentAttempt.join(""));  //1 or 0
    }
    if (currentAttempt.length <= maxLength){ //1 or 0
      for (var i = 0; i < allowedChars.length; i++){ // n
        findPassword(currentAttempt.concat(allowedChars[i])); //recursive call
      }
    }
  }

  findPassword([]); //recursive call
  return results; //1
}


/////////// Prompt 11 ///////////
/////////// time complexity: 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]
  // O(log n) - Logarithmic b/c cut the number/size of quad by 4 every time

  if (!Array.isArray(quadTree.color)){ //1
    return quadTree.color; //1 or 0
  } else {
    var quadrant = findQuadrant(quadTree, coordinates);  //1
    if (quadrant === "NE") { //1 or 0
      return findColor(quadTree.color[0], coordinates);//??
    } 
    if (quadrant === "SE") { //1 or 0
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") { //1 or 0
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") { //1 or 0
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity: 
//this will require some math to determine 

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}







