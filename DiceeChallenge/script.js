function dice(){
var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;
console.log(player1, player2);
document.querySelector(".img1").setAttribute("src", `images/${player1}.png`);
document.querySelector(".img2").setAttribute("src", `images/${player2}.png`);
var result = document.querySelector('h1');
if(player1>player2){
    result.innerHTML=`Player 1 Won <br>
    <button type="button" class="btn btn-primary btn-lg" onclick="dice()">Refresh me</button>`;
}
else if(player1<player2){
    result.innerHTML=`Player 2 Won <br>
    <button type="button" class="btn btn-primary btn-lg" onclick="dice()">Refresh me</button>`;
}
else{
    result.innerHTML=`It's a tie <br>
    <button type="button" class="btn btn-prima btn-lgry" onclick="dice()">Refresh me</button>`;
}
}