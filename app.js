const an = document.querySelectorAll('a');
const btn = document.querySelector('#ddb');
let btnValue = undefined;
const alerts = document.querySelector('#alert');
const ul = document.querySelector('ul');

let isGameOver = false;

const i1 = document.querySelector('#b1');
const i2 = document.querySelector('#b2');
const i3 = document.querySelector('#b3');
const span1 = document.querySelector('#ans1');
const span2 = document.querySelector('#ans2');
const span3 = document.querySelector('#ans3');

// PRINTING GAME POINT ON BUTTON
ul.addEventListener('click',(e) =>{btn.innerText = e.target.innerText;
btnValue = parseInt(btn.innerText);
})

//GAME POINT PRINTING
function gamePointPrinting(){
    let num = btnValue;
    if(isNaN(num)){
        alerts.style.display='block'; 
        isGameOver = true;
        return;}
    else
        alerts.style.display='none';
        isGameOver = false;
}

//RESET BUTTON
i2.addEventListener('click',()=>{
    span1.style.display = 'inline';
    span2.style.display = 'inline';
    span3.style.display = 'inline';
    span1.innerText = "0";
    span2.innerText = "0";
    span3.innerText = "TO";
    alerts.style.display='none'; });

//INCREMENT BUTTONS    
i1.addEventListener('click',()=>{
    gamePointPrinting();
    logic(span1);});
i3.addEventListener('click',()=>{
    gamePointPrinting();
    logic(span2)});


//LOGIC
function logic(span){
    if(!isGameOver){
        let temp = parseInt(span.innerText);
        span.innerText = temp + 1;
        if(parseInt(span1.innerText) > (btnValue))
            gameOver(1);
        else if(parseInt(span2.innerText) > (btnValue))
            gameOver(2);
        else    
            return;    
    }
}

function gameOver(n){
        span1.style.display='none'; span2.style.display='none';
        span3.innerText = `Player ${n} won`;
}