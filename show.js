var i = 0;
showNext = () =>{
    if (i == 0){
        document.getElementById("one").innerHTML = document.getElementById("two").innerHTML;
        document.getElementById("Rtwo").style.display = "block";
    } else if (i == 1){
        document.getElementById("one").innerHTML = document.getElementById("three").innerHTML;
        document.getElementById("Rthree").style.display = "block";
    } else if (i == 2){
        document.getElementById("one").innerHTML = document.getElementById("four").innerHTML;
        document.getElementById("Rfour").style.display = "block";
    }
    i++;
}

showRecord = () =>{
    var Rimg = document.getElementById("recordImg");
    var Rtxt = document.getElementById("recordTxt");
    var Htxt = document.getElementById("helpTxt");
    
    if(Rimg.style.display == "none"){
        Rimg.style.display = "block";
        Rtxt.style.display = "block";
        Htxt.style.display = "none";
    }else{
        Rimg.style.display = "none";
        Rtxt.style.display = "none";
        Htxt.style.display = "none";
    }
}

showHelp = () =>{
    var Himg = document.getElementById("recordImg");
    var Htxt = document.getElementById("helpTxt");
    var Rtxt = document.getElementById("recordTxt");
    
    if(Himg.style.display == "none"){
        Himg.style.display = "block";
        Htxt.style.display = "block";
        Rtxt.style.display = "none";
    }else{
        Himg.style.display = "none";
        Htxt.style.display = "none";
        Rtxt.style.display = "none";
    }
}