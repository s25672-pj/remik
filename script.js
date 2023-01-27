// inserty
const gracz1 = document.getElementById("gracz1")
const gracz2 = document.getElementById("gracz2")
const gracz3 = document.getElementById("gracz3")
const gracz4 = document.getElementById("gracz4")
const punkty1 = document.getElementById("dodaj1")
const punkty2 = document.getElementById("dodaj2")
const punkty3 = document.getElementById("dodaj3")
const punkty4 = document.getElementById("dodaj4")



// przyciski
const buttonNext = document.getElementById("button_next")
const win1Button = document.getElementById("wygrany1");
const win2Button = document.getElementById("wygrany2");
const win3Button = document.getElementById("wygrany3");
const win4Button = document.getElementById("wygrany4");

//  boxy

const name_box = document.getElementById("name");
const wyniki_box = document.getElementById("wyniki")

// let

var wynik1 = 0;
var wynik2 = 0;
var wynik3 = 0;
var wynik4 = 0;
var suma;






buttonNext.onclick = () =>{
    name_box.classList.add("none");
    wyniki_box.classList.remove("none")
    ustawImie();
    // wynik1 = 0;
    // wynik2 = 0;
    // wynik3 = 0;
    // wynik4 = 0;
    ustawWynik();
}
win1Button.onclick = () =>{
    wygrany1();
}
win2Button.onclick = () =>{
    wygrany2();
}
win3Button.onclick = () =>{
    wygrany3();
}
win4Button.onclick = () =>{
    wygrany4();
}

function ustawImie(){
    const imie1 = document.getElementById("imie1")
let tag1 = gracz1.value;
imie1.innerHTML = tag1;
    const imie2 = document.getElementById("imie2")
let tag2 = gracz2.value;
imie2.innerHTML = tag2;
    const imie3 = document.getElementById("imie3")
let tag3 = gracz3.value;
imie3.innerHTML = tag3;
    const imie4 = document.getElementById("imie4")
let tag4 = gracz4.value;
imie4.innerHTML = tag4;
}

function ustawWynik(){
    const aktualny1 = document.getElementById("wynik1")
let tag1 = wynik1;
aktualny1.innerHTML = tag1;
    const aktualny2 = document.getElementById("wynik2")
let tag2 = wynik2;
aktualny2.innerHTML = tag2;
    const aktualny3 = document.getElementById("wynik3")
let tag3 = wynik3;
aktualny3.innerHTML = tag3;
    const aktualny4 = document.getElementById("wynik4")
let tag4 = wynik4;
aktualny4.innerHTML = tag4;
}

function wygrany1(){  
    wynik2 -= parseInt(punkty2.value);
    wynik3 -= parseInt(punkty3.value);
    wynik4 -= parseInt(punkty4.value);
    wynik1 += parseInt(punkty2.value);
    wynik1 += parseInt(punkty3.value);
    wynik1 += parseInt(punkty4.value);
    document.getElementById("dodaj1").value="";
    document.getElementById("dodaj2").value="";
    document.getElementById("dodaj3").value="";
    document.getElementById("dodaj4").value="";       
    ustawWynik();
}
function wygrany2(){  
    wynik1 -= parseInt(punkty1.value);
    wynik3 -= parseInt(punkty3.value);
    wynik4 -= parseInt(punkty4.value);
    wynik2 += parseInt(punkty1.value);
    wynik2 += parseInt(punkty3.value);
    wynik2 += parseInt(punkty4.value);
    document.getElementById("dodaj1").value="";
    document.getElementById("dodaj2").value="";
    document.getElementById("dodaj3").value="";
    document.getElementById("dodaj4").value="";       
    ustawWynik();
}
function wygrany3(){  
    wynik2 -= parseInt(punkty2.value);
    wynik1 -= parseInt(punkty1.value);
    wynik4 -= parseInt(punkty4.value);
    wynik3 += parseInt(punkty2.value);
    wynik3 += parseInt(punkty1.value);
    wynik3 += parseInt(punkty4.value);
    document.getElementById("dodaj1").value="";
    document.getElementById("dodaj2").value="";
    document.getElementById("dodaj3").value="";
    document.getElementById("dodaj4").value="";       
    ustawWynik();
}
function wygrany4(){  
    wynik2 -= parseInt(punkty2.value);
    wynik3 -= parseInt(punkty3.value);
    wynik1 -= parseInt(punkty1.value);
    wynik4 += parseInt(punkty2.value);
    wynik4 += parseInt(punkty3.value);
    wynik4 += parseInt(punkty1.value);
    document.getElementById("dodaj1").value="";
    document.getElementById("dodaj2").value="";
    document.getElementById("dodaj3").value="";
    document.getElementById("dodaj4").value="";       
    ustawWynik();
}

