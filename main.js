function login()
{
    player1=document.getElementById("sm").value;
    player2=document.getElementById("bm").value;
    
    localStorage.setItem("play1", player1);
    localStorage.setItem("play2", player2);
}