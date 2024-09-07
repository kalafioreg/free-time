function obliczenia()
{
    let praca = parseInt(document.getElementById("praca").value);
    let dojazd = parseFloat(document.getElementById("dojazd").value);
    let sen = parseFloat(document.getElementById("sen").value);
    let godziny = document.getElementById("godziny");
    let dni = document.getElementById("dni");

    if (praca === 0 || sen === 0.5) {
        godziny.innerHTML = "Enter the values";
        dni.innerHTML = "";
    } else {
        let wolne = 8760 - (praca * 52) - (dojazd * 365) - (sen * 365);
        godziny.innerHTML = "You have " + wolne + " free hours per year,";
        dni.innerHTML = "which after conversion gives " + (wolne / 24).toFixed(0) + " days.";

        let procentCzasuWolnego = (wolne / 8760) * 100;
        procent.innerHTML = "Your free time is " + procentCzasuWolnego.toFixed(2) + "% of the year.";
        
        let roznica = wolne - 3577.5;
        let procentowaRoznica = (roznica / 3577.5) * 100;
        if (roznica !== 0) {
            let porownanie = "";
            if (roznica > 0) {
                porownanie = "<span class='more'>MORE</span>";
            } else if (roznica < 0) {
                porownanie = "<span class='less'>LESS</span>";
            }
            porownanie1.innerHTML = "That's " + Math.abs(procentowaRoznica).toFixed(2) + "% " + porownanie + " free time than the average person";
        } else {
            porownanie1.innerHTML = "Your free time is the same as the average person.";
        }
    }
}
