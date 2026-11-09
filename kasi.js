/* Kasi (käsi) -luokka edustaa pelaajan tai jakajan kättä. Pakka-luokan aliluokkana se saa kaikki Pakka-luokan metodit. */
/* Lisäksi se osaa laskea kädessä olevien korttien summan ja kertoa niiden määrän. */

import {Kortti} from "./kortti.js";
import {Pakka} from "./pakka.js";

export class Kasi extends Pakka {
  constructor() {
    super();
  }

  /* Staattinen metodi eli sitä kutsutaan luokan kautta: Kasi.luoKasi(); */
  /* Palauttaa uuden Kasi-olion eli tyhjän käden. Ei voi kutsua olioissa. */
  static luoKasi() {
    let apukasi = new Kasi();
    return apukasi;
  }

  /* Palauttaa kädessä olevien korttien määrän. */
  /* Tämä on ns. getteri eli sitä käytetään olion ominaisuutena, ei funktiona (eli ilman sulkuja). Esim. let maara = omaPakka.kortteja; */
  get kortteja() {
    return this.kortit.length;
  }

  /* Palauttaa kädessä olevien korttien summan. */
  get summa() {
    return this.kortit.reduce((summa,kortti)=>summa+kortti.arvo,0);
  }

};