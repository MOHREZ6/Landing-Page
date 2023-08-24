let toggle=document.getElementById('toggle');
let close=document.getElementById('close');
let open=document.getElementById('open');
let modal=document.getElementById('modal');

toggle.addEventListener('click',function(){
    document.body.classList.toggle('show-nav');
})

open.addEventListener('click',function(){
    modal.classList.add('show-modal');
})

close.addEventListener('click',function(){
    modal.classList.remove('show-modal');
})
close.addEventListener('click',function(){
    modal.classList.remove('show-modal');
})