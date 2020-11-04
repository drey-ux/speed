function changeBodyBg(color){
    document.body.style.background = color;
    if (color !== '#0392BF'){
        document.body.style.color = "rgb(5, 5, 5)";
        
    }else if(color === '#0392BF'){
        document.body.style.color = "#fff"
    }
    else if(color === '#fff'){
        document.getElementById('standout').color = "rgb(5, 5, 5)";
    }
}