function skaiciuoti() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    var p = (a + b + c) / 2;

    var suma = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    document.getElementById("viso").innerHTML = suma;

    if (a < 0)
        document.getElementById("viso").innerHTML = " kraštinės ilgis negali būti neigiamas";
    if (b < 0)
        document.getElementById("viso").innerHTML = " kraštinės ilgis negali būti neigiamas";
    if (c < 0)
        document.getElementById("viso").innerHTML = " kraštinės ilgis negali būti neigiamas";

    if (suma == 0)
        document.getElementById("viso").innerHTML = " iš šių kraštinių negalima sudaryti trikampio";
    
    if (suma = String)
        document.getElementById("viso").innerHTML = " įveskite skaičius";
}

//BODY BACKGROUND COLOR
document.body.style.backgroundColor = "#7A4C53";
