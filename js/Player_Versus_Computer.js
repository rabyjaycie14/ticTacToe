// Jaycie Raby
//Professor Baugh CIS 435 Project 2
//November 11th, 2018

var first_move_mode2 = true; //first move
var counter_mode2 = 0; //keep track of number of times player versus player function is called
var first_place_mode_2; //set symbol for first player
var second_place_mode2; //set symbol for second player
var flag = false; //set flag for winner
var game_count=0; //track if its end of turn for cats game
var rand_int_mode_2 = Math.floor(Math.random() * Math.floor(2)); //generate random int

// Handle game over when it occurs from winner or cat's game
function GAME_OVER_MODE2(){
  var game_over_button2_COMP = document.getElementById('game_over_bttn2'); //get element ID
  game_over_button2.style.display = "block"; //display heading
  game_over_button2.style="margin-left: auto; margin-right: auto"; //center
}

// Check for available cells for computer to place their turn
function checkForOpenSpaces(){
  var r1c1_check = document.getElementById("r1c1_2").innerText.trim();
  var r1c2_check = document.getElementById("r1c2_2").innerText.trim();
  var r1c3_check = document.getElementById("r1c3_2").innerText.trim();
  var r2c1_check = document.getElementById("r2c1_2").innerText.trim();
  var r2c2_check = document.getElementById("r2c2_2").innerText.trim();
  var r2c3_check = document.getElementById("r2c3_2").innerText.trim();
  var r3c1_check = document.getElementById("r3c1_2").innerText.trim();
  var r3c2_check = document.getElementById("r3c2_2").innerText.trim();
  var r3c3_check = document.getElementById("r3c3_2").innerText.trim();
  var open_space = []; //create array to hold open spaces

  if(r1c1_check == ''){
    open_space.push("r1c1_2");
  }
  if(r1c2_check == '') {
    open_space.push("r1c2_2");
  }
  if(r1c3_check == '') {
    open_space.push("r1c3_2");
  }
  if(r2c1_check == '') {
    open_space.push("r2c1_2");
  }
  if(r2c2_check == '') {
    open_space.push("r2c2_2");
  }
  if(r2c3_check == '') {
    open_space.push("r2c3_2");
  }
  if(r3c1_check == '') {
    open_space.push("r3c1_2");
  }
  if(r3c2_check == '') {
    open_space.push("r3c2_2");
  }
  if(r3c3_check == '') {
    open_space.push("r3c3_2");
  }

  var num_open_spaces = open_space.length; //get length of numbers in
  var rand_int_computer = Math.floor(Math.random() * Math.floor(num_open_spaces)); //have computer choose random number
  var next_move = open_space[rand_int_computer]; //choose that random number from the array
  return next_move; //return comupters next move
}

//Determine and display if it's computer/players turn
function checkPlayerTurn_MODE2(last_move){
  //Block player versus player heading, display player versus computer heading
  var showTable_mode1_COMPUTER = document.getElementById('player_turn_mode1');
  var showTable_mode2_COMPUTER = document.getElementById('player_turn_mode2');
  if(showTable_mode1_COMPUTER.style.display === "none"){
    showTable_mode2_COMPUTER.style.display = "none";
    showTable_mode1_COMPUTER.style.display = "block";
  }

  //Decide whose turn it is, and display in heading
  var player_turn_mode2 = document.getElementById('player_turn_mode2');
  if(first_move_mode2 === true){
    var choose_mode_2 = last_move;
    player_turn_mode2.innerText = ("It's " + choose_mode_2 + "'s turn!");
  }
  else if(last_move == "X"){ // if
    var choose_mode_2 = "O";
    player_turn_mode2.innerText = ("It's " + choose_mode_2 + "'s turn!");
  }
  else if(last_move == "O") {
    var choose_mode_2 = "X"; // odd numbers will be computer
    player_turn_mode2.innerText = ("It's " + choose_mode_2 + "'s turn!");
  }
}

//If winner is found
function winner_MODE2(player_mode2) {
  var check_win = document.getElementById('winner_MODE2');
  check_win.innerText = (player_mode2 + " is the winner! Click 'Play Again?' to start a new game!"); //display header
  player_turn_mode1.style.display="none"; //block header "turn" from displaying
  player_turn_mode2.style.display="none"; //block header "turn" from displaying
  return true; //return true for winner
}

//If cats game occurs
function cats_game_MODE2(){
  var cats = document.getElementById('cats_game_MODE2');
  cats.innerText = ("UH-OH, CATS GAME! Nobody wins!"); //display header
  player_turn_mode1.style.display="none"; //block header "turn" from displaying
  player_turn_mode2.style.display="none"; //block header "turn" from displaying
  return true; //return true for cats gaem
}

//Check if player/computer has made a winning move
function checkForWinner_MODE2(player_mode2){
  // Indicate the 8 winning combinations, and check for winner
  var r1c1_2 = document.getElementById("r1c1_2").innerText.trim();
  var r1c2_2 = document.getElementById("r1c2_2").innerText.trim();
  var r1c3_2 = document.getElementById("r1c3_2").innerText.trim();
  var r2c1_2 = document.getElementById("r2c1_2").innerText.trim();
  var r2c2_2 = document.getElementById("r2c2_2").innerText.trim();
  var r2c3_2 = document.getElementById("r2c3_2").innerText.trim();
  var r3c1_2 = document.getElementById("r3c1_2").innerText.trim();
  var r3c2_2 = document.getElementById("r3c2_2").innerText.trim();
  var r3c3_2 = document.getElementById("r3c3_2").innerText.trim();
  var set_flag_mode2 = false;

  // OPTION 1 - diaganol, starting top left, down right
  if(r1c1_2 == "X" && r2c2_2 == "X" && r3c3_2 == "X" || r1c1_2 == "O" && r2c2_2 == "O" && r3c3_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2); //call winner_MODE2 and get return value
    return set_flag_mode2;
  }

  // OPTION 2 - diaganol, starting top right, down left
  else if(r1c3_2 == "X" && r2c2_2 == "X" && r3c1_2 == "X" || r1c3_2 == "O" && r2c2_2 == "O" && r3c1_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2);
    return set_flag_mode2;

  }

  // OPTION 3 - straight, row 1
  else if(r1c1_2 == "X" && r1c2_2 == "X" && r1c3_2 == "X" || r1c1_2 == "O" && r1c2_2 == "O" && r1c3_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2);
    return set_flag_mode2;
  }

  // OPTION 4 - straight, row 2
  else if(r2c1_2 == "X" && r2c2_2 == "X" && r2c3_2 == "X" ||r2c1_2 == "O" && r2c2_2 == "O" && r2c3_2 == "O"  ){
    set_flag_mode2 = winner_MODE2(player_mode2);
    return set_flag_mode2;
  }

  // OPTION 5 - straight, row 3
  else if(r3c1_2 == "X" && r3c2_2 == "X" && r3c3_2 == "X" || r3c1_2 == "O" && r3c2_2 == "O" && r3c3_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2);
  }

  // OPTION 6 - down, column 1
  else if(r1c1_2 == "X" && r2c1_2 == "X" && r3c1_2 == "X" || r1c1_2 == "O" && r2c1_2 == "O" && r3c1_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2);
    return set_flag_mode2;
  }

  // OPTION 7 - down, column 2
  else if(r1c2_2 == "X" && r2c2_2 == "X" && r3c2_2 == "X" || r1c2_2 == "O" && r2c2_2 == "O" && r3c2_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2);
    return set_flag_mode2;
  }

  // OPTION 8 - down, column 3
  else if(r1c3_2 == "X" && r2c3_2 == "X" && r3c3_2 == "X" || r1c3_2 == "O" && r2c3_2 == "O" && r3c3_2 == "O"){
    set_flag_mode2 = winner_MODE2(player_mode2);
    return set_flag_mode2;
  }
  if(game_count == 8 && set_flag_mode2 === false){ //if no more spots can be filled, and no winner is found
    set_flag_mode2 = cats_game_MODE2();
    return set_flag_mode2;
  }
}

//Starts/ends player versus computer game
function Player_Versus_Computer(id_2){
  //show/hide correct heading for player versus computer
  var mode2_COMPUTER = document.getElementById('game_PVP');
  var mode1_COMPUTER = document.getElementById('game_PVC');
  if(mode1_COMPUTER.style.display === "none"){
    mode2_COMPUTER .style.display = "none";
    mode1_COMPUTER.style.display = "block";
    mode1_COMPUTER.innerText = "Game Mode: Player 1 Versus Computer";
    mode1_COMPUTER.style="margin-left: auto; margin-right: auto";
  }
  //show/hide correct table for player versus computer
  var showTable_mode1_COMP = document.getElementById('table1');
  var showTable_mode2_COMP = document.getElementById('table2');
  if(showTable_mode2_COMP.style.display === "none"){
    showTable_mode1_COMP.style.display = "none";
    showTable_mode2_COMP.style.display = "block";
    showTable_mode2_COMP.style="margin-left: auto; margin-right: auto";
  }

  var pvc_id = document.getElementById(id_2); //get id_2 location on board

  // Use math.random function to decide which player goes first
  if(first_move_mode2 === true){
    if(rand_int_mode_2 === 1) { //X goesfirst
      first_place_mode_2 = "X";
      second_place_mode2 = "O";
    }
    else {
      first_place_mode_2 = "O"; //O goes first
      second_place_mode2 = "X";
      next_move = checkForOpenSpaces(); //find all open spaces
      pvc_id = document.getElementById(next_move); //set next placement id
    }
    pvc_id.innerText = first_place_mode_2; //insert next placement id
    first_move_mode2 = false; //set first turn to false
    counter_mode2++;
    if(first_place_mode_2 == "O"){
      checkPlayerTurn_MODE2("O");
    }
  }
  else if (flag != true){ //if no one has won the game
    if(first_place_mode_2 == "O"){ // computer goes first, therefore odd turns
      if(counter_mode2%2 == 0){ // computer goes on even number turns
        next_move = checkForOpenSpaces();
        pvc_id = document.getElementById(next_move);
        pvc_id.innerText = "O";
        flag = checkForWinner_MODE2(first_place_mode_2);
        if(flag === false){
          checkPlayerTurn_MODE2("O");
        }
      }
      else{
        if(pvc_id.innerText.trim() == ''){ // player goes on odd number turns
          pvc_id.innerText = "X";
          flag = checkForWinner_MODE2(second_place_mode2);
        }
      }
    }
    else if (first_place_mode_2 == "X") { // player goes first, therefore odd turns
      if(counter_mode2%2 == 0){ // player goes on even number turns
        if(pvc_id.innerText.trim() == ''){
          pvc_id.innerText = "X";
          flag = checkForWinner_MODE2(first_place_mode_2);
        }
      }
      else{
        next_move = checkForOpenSpaces();
        pvc_id = document.getElementById(next_move);
        pvc_id.innerText = "O";
        flag = checkForWinner_MODE2(first_place_mode_2);
        if(flag === false){
          checkPlayerTurn_MODE2("O");
        }
      }
    }
    counter_mode2++;
  }
  game_count++;
  if(flag != true){ //if no winner, recursively call function for computers turn
    if(pvc_id.innerText.trim() == "X"){
      Player_Versus_Computer(id_2);
    }
  }
  if(flag === true){ //if winner is found, stop timer and display game over
    setTimer(true);
    GAME_OVER_MODE2();
  }
}
