import { Maa } from "./moduulit/maa.js";
import { Pakka } from "./moduulit/pakka.js";
import { Kasi } from "./moduulit/kasi.js";

/* Pakan ja käsien määrittely */
let pakka;
let pelaajanKasi;
let jakajanKasi;

/* Aloittaa uuden pelin */
function uusiPeli() {
    pakka = Pakka.luoPakka();
    pakka.sekoita();

    pelaajanKasi = Kasi.luoKasi();
    jakajanKasi = Kasi.luoKasi();

    // Tyhjennetään kortit näytöltä
    for (let i = 1; i <= 5; i++) {
        document.getElementById("pelaaja" + i).textContent = "";
        document.getElementById("pelaaja" + i).className = "kortti";

        document.getElementById("jakaja" + i).textContent = "";
        document.getElementById("jakaja" + i).className = "kortti";
    }

    document.getElementById("tulos").textContent = "";

    // Lisätään tapahtumakäsittelijät
    document.getElementById("ota-kortti").onclick = otaPelaajanKortti;
    document.getElementById("jaa").onclick = jakajanVuoro;

    // Jaetaan kaksi korttia pelaajalle
    otaPelaajanKortti();
    otaPelaajanKortti();
}

/* Palauttaa maan symbolin */
function haeMaaSymboli(maa) {
    return maa.symboli;
}

/* Palauttaa kortin arvosymbolin */
function haeArvoSymboli(arvo) {
    switch (arvo) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        default: return arvo;
    }
}

/* Palauttaa käden korttien yhteissumman */
function kadenSumma(kasi) {
    return kasi.summa;
}

/* Pelaaja ottaa uuden kortin */
function otaPelaajanKortti() {
    if (pakka.kortit.length === 0) return;

    const kortti = pakka.otaKortti();
    pelaajanKasi.lisaaKortti(kortti);

    const indeksi = pelaajanKasi.kortteja;
    const elementti = document.getElementById("pelaaja" + indeksi);

    elementti.textContent =
        haeArvoSymboli(kortti.arvo) + haeMaaSymboli(kortti.maa);

    elementti.className = "kortti " + kortti.maa.vari;

    if (pelaajanKasi.kortteja >= 2) {
        tarkistaPelaajanPisteet();
    }
}

/* Jakaja ottaa uuden kortin */
function otaJakajanKortti() {
    if (pakka.kortit.length === 0) return;

    const kortti = pakka.otaKortti();
    jakajanKasi.lisaaKortti(kortti);

    const indeksi = jakajanKasi.kortteja;
    const elementti = document.getElementById("jakaja" + indeksi);

    elementti.textContent =
        haeArvoSymboli(kortti.arvo) + haeMaaSymboli(kortti.maa);

    elementti.className = "kortti " + kortti.maa.vari;
}

/* Tarkistaa pelaajan pisteet */
function tarkistaPelaajanPisteet() {
    const summa = kadenSumma(pelaajanKasi);

    if (summa > 21) {
        paataPeli("Jakaja voitti! Pelaajan pisteet: " + summa);
    } else if (summa === 21) {
        paataPeli("Pelaaja voitti! Ventti: 21 pistettä!");
    } else if (pelaajanKasi.kortteja === 5) {
        paataPeli("Pelaaja voitti viiden kortin ventillä!");
    }
}

/* Päättää pelin ja poistaa nappien tapahtumat */
function paataPeli(viesti) {
    document.getElementById("tulos").textContent = viesti;
    document.getElementById("ota-kortti").onclick = null;
    document.getElementById("jaa").onclick = null;
}

/* Jakajan vuoro */
function jakajanVuoro() {
    document.getElementById("ota-kortti").onclick = null;
    document.getElementById("jaa").onclick = null;

    while (true) {
        otaJakajanKortti();

        if (!tarkistaJakajanPisteet()) {
            break;
        }
    }
}

/* Tarkistaa jakajan pisteet */
function tarkistaJakajanPisteet() {
    const summa = kadenSumma(jakajanKasi);
    const pelaajanSumma = kadenSumma(pelaajanKasi);

    if (summa > 21) {
        paataPeli("Pelaaja voitti! Jakajan pisteet: " + summa);
        return false;
    }

    if (
        summa >= pelaajanSumma ||
        summa === 21 ||
        jakajanKasi.kortteja === 5
    ) {
        paataPeli("Jakaja voitti! Jakajan pisteet: " + summa);
        return false;
    }

    return true;
}

/* Uusi peli -napin tapahtumakäsittelijä */
document.getElementById("uusi-peli").addEventListener("click", uusiPeli);
