var jumpout = document.getElementById('jumpout');
var letter = document.getElementById('letter');
var mi = document.getElementById('more-mi');
var mi_jump = document.getElementById('more-mi-jump');
var land = document.getElementById('more-ourland');
var land_jump = document.getElementById('more-ourland-jump');
var liu = document.getElementById('more-liu');
var liu_jump = document.getElementById('more-liu-jump');
var talk = document.getElementById('more-talk');
var talk_jump = document.getElementById('more-talk-jump');

var arrow2 = document.getElementById('arrow-2');
var club2 = document.getElementById('club-2');
var arrow3 = document.getElementById('arrow-3');
var club3 = document.getElementById('club-3');


letter.addEventListener('click', function(){
    jumpout.style.display = 'block';
});

jumpout.addEventListener('click', function(){
    jumpout.style.display = 'none';
});

mi.addEventListener('click', function(){
    mi_jump.style.display = 'block';
});

mi_jump.addEventListener('click', function(){
    mi_jump.style.display = 'none';
});

land.addEventListener('click', function(){
    land_jump.style.display = 'block';
});

land_jump.addEventListener('click', function(){
    land_jump.style.display = 'none';
});

liu.addEventListener('click', function(){
    liu_jump.style.display = 'block';
});

liu_jump.addEventListener('click', function(){
    liu_jump.style.display = 'none';
});

talk.addEventListener('click', function(){
    talk_jump.style.display = 'block';
});

talk_jump.addEventListener('click', function(){
    talk_jump.style.display = 'none';
});


document.getElementById('arrow-1').addEventListener('click',function(){
    document.getElementById('club-1').style.display = 'block';
})