let scoreM =2700;
let score =2700;
let vie = 400;

const life =document.querySelector("#score");
document.querySelector("#img").addEventListener('mousedown',function(event){
    
    if(event.button ===0)
    {
        let degats =degat();
        score-=degats;
        vie =((score*400)/scoreM);
        console.log(degats);
        life.textContent =score;
        document.getElementById('vie').style.width = `${vie}px`;
        if(score<=0)
        {
            nouv();
        }
        if(score<=(scoreM/2))
        {
            document.getElementById('vie').style.backgroundColor = 'orange';
        }
        if(score<=scoreM/4)
        {
            document.getElementById('vie').style.backgroundColor = 'red';
        }
    }
});
life.textContent =score;



 function getrandom(max)
{
    return Math.floor(Math.random()*max);
}
function degat()
{
    if(getrandom(100)>4)
    {
        return (getrandom(14)+1);
    }
    else
    {
        return 65;
    }
}

function nouv(){
fetch('https://pokeapi.co/api/v2/pokemon/'+getrandom(151))
.then(reponse => reponse.json())
.then(resultat => {
    ecran(resultat)
});
}
function ecran(pok){
    document.getElementById('img').src = pok.sprites.other.dream_world.front_default;
}

