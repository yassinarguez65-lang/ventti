/* Tämä moduuli määrittelee yhden pelikortin. */

export class Kortti {

  /* Konstruktori uusien korttien luomiseen. maa-parametri on Maa-tyypin vakio, arvo numero. */
  /* Vain Pakka-luokan käyttöön. Ei tarkoitettu käytettäväksi suoraan käyttöliittymästä. */
  constructor(maa, arvo) {
    this.maa = maa;
    this.arvo = arvo;
  }

  /* Palauttaa kortissa näytettävän arvosymbolin (A, J, Q, K tai numero). */
  /* Tämä on ns. getteri eli sitä käytetään olion ominaisuutena, ei funktiona (eli ilman sulkuja). Esim. console.log(omaKortti.arvosymboli); */
  get arvosymboli() {
    switch(this.arvo) {
        case 1:
            return "A";
        case 11:
            return "J";
        case 12:
            return "Q";
        case 13:
            return "K";
        default:
            return this.arvo;
    }
  }

  /* Palauttaa kortin tiedot merkkijonona. Ei hyödyllinen graafista käyttöliittymää tehdessä. */
  toString() {
    return `${this.maa.symboli} ${this.arvo}`;
  }
};