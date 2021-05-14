function tercs()
{
    var mensaje = "Sin igualdad"
    var nombre = document.getElementById("nomb").value;

    var x1 = Math.trunc( Math.random()*6 ) + 1;
    var x2 = Math.trunc( Math.random()*6 ) + 1;
    var x3 = Math.trunc( Math.random()*6 ) + 1;

    //caja 1
    switch (x1)
    {
        case 1:
            document.getElementById("box1").innerHTML="<img src='img/0.jpg'>"
            break;

        case 2:
            document.getElementById("box1").innerHTML="<img src='img/1.jpg'>"
            break;

        case 3:
            document.getElementById("box1").innerHTML="<img src='img/2.jpg'>"
            break;

        case 4:
            document.getElementById("box1").innerHTML="<img src='img/3.jpg'>"
            break;

        case 5:
            document.getElementById("box1").innerHTML="<img src='img/4.jpg'>"
            break;
        case 6:
            document.getElementById("box1").innerHTML="<img src='img/5.jpg'>"
            break;
    }

    //caja 2

    switch (x2)
    {
        case 1:
            document.getElementById("box2").innerHTML="<img src='img/0.jpg'>"
            break;

        case 2:
            document.getElementById("box2").innerHTML="<img src='img/1.jpg'>"
            break;

        case 3:
            document.getElementById("box2").innerHTML="<img src='img/2.jpg'>"
            break;

        case 4:
            document.getElementById("box2").innerHTML="<img src='img/3.jpg'>"
            break;

        case 5:
            document.getElementById("box2").innerHTML="<img src='img/4.jpg'>"
            break;
        case 6:
            document.getElementById("box2").innerHTML="<img src='img/5.jpg'>"
            break;
    }



    //caja 3

    switch (x3)
    {
        case 1:
            document.getElementById("box3").innerHTML="<img src='img/0.jpg'>"
            break;

        case 2:
            document.getElementById("box3").innerHTML="<img src='img/1.jpg'>"
            break;

        case 3:
            document.getElementById("box3").innerHTML="<img src='img/2.jpg'>"
            break;

        case 4:
            document.getElementById("box3").innerHTML="<img src='img/3.jpg'>"
            break;

        case 5:
            document.getElementById("box3").innerHTML="<img src='img/4.jpg'>"
            break;
        case 6:
            document.getElementById("box3").innerHTML="<img src='img/5.jpg'>"
            break;
    }

if ((x1==x2) && (x1==x3))

    mensaje="Tercia!! :D";

else if ((x1==x2)||(x1==x3))

    mensaje="Pares!! XP";

else if ((x3==x2)||(x3==x1))
   mensaje="Pares!! XP";

else
mensaje ="No tubiste suerte :/";

document.getElementById("sal01").innerHTML="Hola "+nombre+" Tu resultado es: ";

document.getElementById("resul").innerHTML = mensaje;
//codigo para saber que numeros tocaron y verificar la formula
document.getElementById("n1").innerHTML=x1
document.getElementById("n2").innerHTML=x2
document.getElementById("n3").innerHTML=x3


}