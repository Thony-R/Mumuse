let score =100;
const life =document.querySelector("#score");
document.querySelector("#img").addEventListener('mousedown',function(event){
    
    if(event.button ===0)
    {
        score--;
        // life.textContent =score;
        
document.getElementById('vie').style.width = '${score}px';
    }
});
life.textContent =score;
