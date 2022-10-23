function Multiby() {
    DMPP = document.getElementById("DMPP").value;
    DMP = parseFloat(document.getElementById("DMP").value);
    H3PO4 = parseFloat(document.getElementById("H3PO4").value);
    COLOR = parseFloat(document.getElementById("COLOR").value);
    YELLOW = parseFloat(document.getElementById("YELLOW").value);
    BLUE = parseFloat(document.getElementById("BLUE").value);
    tons = parseFloat(document.getElementById("tons").value);

    DMPSUM = tons * DMP
    H3PO4SUM = tons * H3PO4
    COLORSUM = tons * COLOR
    YELLOWSUM = tons * YELLOW
    BLUESUM = tons * BLUE

    SUM = (DMP + H3PO4 + COLOR + YELLOW + BLUE) * tons;
    KT = DMP + H3PO4 + COLOR + YELLOW + BLUE;
    document.getElementById("dmppname").innerHTML = DMPP + " : ";
    document.getElementById("dmpsum").innerHTML = "DMP" + " = " + DMPSUM.toFixed(3) + " kg";
    document.getElementById("h3po4sum").innerHTML = "H3PO4" + " = " + H3PO4SUM.toFixed(3) + " kg";
    document.getElementById("colorsum").innerHTML = "COLOR" + " = " + COLORSUM.toFixed(3) + " kg";
    document.getElementById("yellowsum").innerHTML = "YELLOW" + " = " + YELLOWSUM.toFixed(3) + " kg";
    document.getElementById("bluesum").innerHTML = "BLUE" + " = " + BLUESUM.toFixed(3) + " kg";
    document.getElementById("sum").innerHTML = "Σύνολο DMPP :" + " " + SUM.toFixed(3) + " kg";
    document.getElementById("k/t").innerHTML = "KILOS per TON : " + KT.toFixed(3) + " k/t";


}

function DivitBy() {


    DMPP = document.getElementById("DMPP").value;
    DMP = parseFloat(document.getElementById("DMP").value);
    H3PO4 = parseFloat(document.getElementById("H3PO4").value);
    COLOR = parseFloat(document.getElementById("COLOR").value);
    YELLOW = parseFloat(document.getElementById("YELLOW").value);
    BLUE = parseFloat(document.getElementById("BLUE").value);
    kilos = parseFloat(document.getElementById("kilos").value);

    KT1 = DMP + H3PO4 + COLOR + YELLOW + BLUE;
    tons = kilos / KT1

    DMPSUM1 = tons * DMP
    H3PO4SUM1 = tons * H3PO4
    COLORSUM1 = tons * COLOR
    YELLOWSUM1 = tons * YELLOW
    BLUESUM1 = tons * BLUE

    document.getElementById("dmppname1").innerHTML = DMPP + " : ";
    document.getElementById("dmpsum1").innerHTML = "DMP" + " = " + DMPSUM1.toFixed(3) + " kg";
    document.getElementById("h3po4sum1").innerHTML = "H3PO4" + " = " + H3PO4SUM1.toFixed(3) + " kg";
    document.getElementById("colorsum1").innerHTML = "COLOR" + " = " + COLORSUM1.toFixed(3) + " kg";
    document.getElementById("yellowsum1").innerHTML = "YELLOW" + " = " + YELLOWSUM1.toFixed(3) + " kg";
    document.getElementById("bluesum1").innerHTML = "BLUE" + " = " + BLUESUM1.toFixed(3) + " kg";
    document.getElementById("sum1").innerHTML = "Σύνολο DMPP σε τονους :" + " " + tons.toFixed(3) + " Tons";
    document.getElementById("k/t1").innerHTML = "KILOS per TON : " + KT1.toFixed(3) + " k/t";
}