// Jaycie Raby
//Professor Baugh CIS 435 Project 2
//November 11th, 2018

var counter_mode1 = 0; //keep track of times player verus player function is callde
var first_move_mode1 = true; //to check if first move
var turn_count_mode1 = 0; //determine player turn
var flag_player = false; //determine if winner

//reset page for play again? button
function reset(){
  location.reload();
}

//reset page for start/restart button
function start_or_restart(){
  location.reload();
}

//Dispaly game over header when it occurs
function GAME_OVER_MODE1(){
  var game_over_button = document.getElementById('game_over_bttn1');
  game_over_button.style.display = "block";
  game_over_button.style="margin-left: auto; margin-right: auto";
}

//Check whose turn it is based on even/odd number of count
function checkPlayerTurn_MODE1(){
  //displayer header for whose turn it is
  var showTable_mode2_PLAYER = document.getElementById('player_turn_mode2');
  var showTable_mode1_PLAYER = document.getElementById('player_turn_mode1');
  if(showTable_mode1_PLAYER.style.display === "none"){
    showTable_mode2_PLAYER.style.display = "none";
    showTable_mode1_PLAYER.style.display = "block";
  }

  var player_turn_mode1 = document.getElementById('player_turn_mode1');
  if(turn_count_mode1 % 2 == 0){
    var choose_mode_1 = "Player 1";
    player_turn_mode1.innerText = ("It's " + choose_mode_1 + "'s turn!");
  }
  else if (turn_count_mode1 % 2 == 1) {
    choose_mode_1 = "Player 2";
    player_turn_mode1.innerText = ("It's " + choose_mode_1 + "'s turn!");
  }
  return choose_mode_1;
}

//Display header if winner is found
function winner_MODE1(player_mode1) {
    var check_win = document.getElementById('winner_MODE1');
    check_win.innerText = (player_mode1 + " is the winner! Click 'Play Again?' to start a new game!");
    player_turn_mode1.style.display="none";
    player_turn_mode2.style.display="none";
    return true;
}

//Display header if cats game occurs
function cats_game_MODE1(){
  var cats = document.getElementById('cats_game_MODE1');
  cats.innerText = ("UH-OH, CATS GAME! Nobody wins!");
  player_turn_mode1.style.display="none";
  player_turn_mode2.style.display="none";
  return true;
}

//Check if player made a winning move
function checkForWinner_MODE1(player_mode1){
  // Indicate the 8 winning combinations, and check for winner
  var r1c1 = document.getElementById("r1c1").innerText.trim();
  var r1c2 = document.getElementById("r1c2").innerText.trim();
  var r1c3 = document.getElementById("r1c3").innerText.trim();
  var r2c1 = document.getElementById("r2c1").innerText.trim();
  var r2c2 = document.getElementById("r2c2").innerText.trim();
  var r2c3 = document.getElementById("r2c3").innerText.trim();
  var r3c1 = document.getElementById("r3c1").innerText.trim();
  var r3c2 = document.getElementById("r3c2").innerText.trim();
  var r3c3 = document.getElementById("r3c3").innerText.trim();
  var set_flag_mode1 = false;

  // OPTION 1 - diaganol, starting top left, down right
  if(r1c1 == "X" && r2c2 == "X" && r3c3 == "X" || r1c1 == "O" && r2c2 == "O" && r3c3 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  // OPTION 2 - diaganol, starting top right, down left
  else if(r1c3 == "X" && r2c2 == "X" && r3c1 == "X" || r1c3 == "O" && r2c2 == "O" && r3c1 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  // OPTION 3 - straight, row 1
  else if(r1c1 == "X" && r1c2 == "X" && r1c3 == "X" || r1c1 == "O" && r1c2 == "O" && r1c3 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  // OPTION 4 - straight, row 2
  else if(r2c1 == "X" && r2c2 == "X" && r2c3 == "X" ||r2c1 == "O" && r2c2 == "O" && r2c3 == "O"  ){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  // OPTION 5 - straight, row 3
  else if(r3c1 == "X" && r3c2 == "X" && r3c3 == "X" || r3c1 == "O" && r3c2 == "O" && r3c3 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  // OPTION 6 - down, column 1
  else if(r1c1 == "X" && r2c1 == "X" && r3c1 == "X" || r1c1 == "O" && r2c1 == "O" && r3c1 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
  }

  // OPTION 7 - down, column 2
  else if(r1c2 == "X" && r2c2 == "X" && r3c2 == "X" || r1c2 == "O" && r2c2 == "O" && r3c2 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  // OPTION 8 - down, column 3
  else if(r1c3 == "X" && r2c3 == "X" && r3c3 == "X" || r1c3 == "O" && r2c3 == "O" && r3c3 == "O"){
    set_flag_mode1 = winner_MODE1(player_mode1);
    return set_flag_mode1;
  }

  if(counter_mode1 == 7 && set_flag_mode1 == false){
    set_flag_mode1 = cats_game_MODE1();
    return set_flag_mode1;
  }
}

//Start/end player versus player
function Player_Versus_Player(id){
  //hide/display header for game mode
  var mode2_PLAYER = document.getElementById('game_PVC');
  var mode1_PLAYER = document.getElementById('game_PVP');
  if(mode1_PLAYER.style.display === "none"){
    mode2_PLAYER .style.display = "none";
    mode1_PLAYER.style.display = "block";
    mode1_PLAYER.innerText = "Game Mode: Player 1 Versus Player 2";
    mode1_PLAYER.style="margin-left: auto; margin-right: auto";
  }

  //if no winner, check turn
  if(flag_player != true){
    var player_mode1 = checkPlayerTurn_MODE1();
  }

  //show/hide table from displaying
  var showTable_mode2 = document.getElementById('table2');
  var showTable_mode1 = document.getElementById('table1');
  if(showTable_mode1.style.display === "none"){
    showTable_mode2.style.display = "none";
    showTable_mode1.style.display = "block";
    showTable_mode1.style="margin-left: auto; margin-right: auto";
  }

  var pvp_id = document.getElementById(id); //get current cell id

  // Use math.random function to decide which player goes first
  if(first_move_mode1 == true){
    var rand_int_mode_1 = Math.floor(Math.random() * Math.floor(2));
    if(rand_int_mode_1 == 1) {
      first_place_mode_1 = "X"; //X get gets odd number turns
    }
    else {
      first_place_mode_1 = "O"; //O gets even number turns
    }
    pvp_id.innerText = first_place_mode_1; //set inner text of cell to first place symbol
    first_move_mode1 = false;
    turn_count_mode1++;
    checkPlayerTurn_MODE1(); //check nex tur
  }
  else{
    if(pvp_id.innerText.trim() == '' && flag_player != true){ //if cell is empty and no winner is found
      if(first_place_mode_1 == "X"){
        if(counter_mode1%2 == 0){
          pvp_id.innerText = "O"; // set even number to O
          flag_player = checkForWinner_MODE1(player_mode1);
          turn_count_mode1++;
        }
        else{
          pvp_id.innerText = "X"; // set odd number to X
          flag_player = checkForWinner_MODE1(player_mode1);
          turn_count_mode1++;
        }
      }
      else if (first_place_mode_1 == "O") {
        if(counter_mode1%2 == 0){
          pvp_id.innerText = "X"; // set even number to X
          flag_player = checkForWinner_MODE1(player_mode1);
          turn_count_mode1++;
        }
        else{
          pvp_id.innerText = "O"; // set odd number to O
          flag_player = checkForWinner_MODE1(player_mode1);
          turn_count_mode1++;
        }
      }
      counter_mode1++;
    }
  }
  if(flag_player === true){ //if winner is found
    setTimer(true); //stop timer
    GAME_OVER_MODE1(); //display game over
  }
}
