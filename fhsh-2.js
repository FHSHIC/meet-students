document.getElementById('myBtn').addEventListener('click', function(e) {
    var myBtn = e.target;
    var current = parseInt(myBtn.getAttribute('angle'));
    current = (current + 180) % 360;
    myBtn.style.transform = `rotate(${current}deg)`;
    myBtn.setAttribute('angle', current);
    document.getElementById('myDropdown').classList.toggle("show");
})

var jumpout = document.getElementById('jumpout');
document.getElementById('letter').addEventListener('click', function(){
    jumpout.style.display = 'block';
})

document.getElementById('jumpout').addEventListener('click', function(){
    jumpout.style.display = 'none';
})