const an = document.querySelectorAll('a');
const btn = document.querySelector('#ddb');
const btnValue = undefined;
const alerts = document.querySelector('#alert');
const ul = document.querySelector('ul');

// PRINTING GAME POINT ON BUTTON
ul.addEventListener('click',(e) =>{btn.innerText = e.target.innerText;
btnValue = btn.innerText;
})

const i1 = document.querySelector('#b1');
const i2 = document.querySelector('#b2');
const i3 = document.querySelector('#b3');
const span1 = document.querySelector('#ans1');
const span2 = document.querySelector('#ans2');
const span3 = document.querySelector('#ans3');

//GAME POINT PRINTING
function gamePointPrinting(){
    let num = parseInt(btnValue);
    if(isNaN(num)){
        alerts.style.display='block'; 
        return;}
    else
        alerts.style.display='none';

}

//RESET BUTTON
i2.addEventListener('click',()=>{
    span1.style.display = 'inline';
    span2.style.display = 'inline';
    span3.style.display = 'inline';
    span1.innerText = "0";
    span2.innerText = "0";
    alerts.style.display='none'; });

//INCREMENT BUTTONS    
i1.addEventListener('click',()=>{
    gamePointPrinting();});
i3.addEventListener('click',()=>{
    gamePointPrinting();});



