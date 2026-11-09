/* Pakka-luokka edustaa yhtä korttipakkaa eli 52 korttia. */

import {Maa} from "./maa.js";
import {Kortti} from "./kortti.js";

export class Pakka{

  /* Konstruktori. Kun Pakka-luokasta luodaan olio, se saa tyhjän taulukon korteille. */
  /* Tätä ei ole tarkoitus kutsua ulkopuolelta, vain luoPakka-metodin kautta. */
  constructor() {
    this.kortit=[];
  }

  /* Lisää kortin (Kortti-olion) tähän pakkaan. Tästä metodista on enemmän hyötyä aliluokassa Kasi. */
  lisaaKortti(uusiKortti){
    this.kortit.push(uusiKortti);
  }

  /* Poistaa kortin tästä pakasta ja palauttaa sen. */
  otaKortti() {
    return this.kortit.pop();
  }

  /* Sekoittaa pakan eli laittaa kortit satunnaiseen järjestykseen. */
  sekoita() {
    if(this.kortit.length<2) {
      return;
    }
    else {
      for(let i=0; i<this.kortit.length; i++){
        let indA=Math.floor(Math.random()*this.kortit.length);
        let indB=Math.floor(Math.random()*this.kortit.length);
        [this.kortit[indA], this.kortit[indB]]=[this.kortit[indB],this.kortit[indA]];
      }
    }
  }

  /* Staattinen metodi eli sitä kutsutaan luokan kautta: Pakka.luoPakka(); */
  /* Palauttaa uuden Pakka-olion, jossa on 52 korttia. Ei voi kutsua olioissa. */
  static luoPakka() {
    let apupakka=new Pakka();
    for(let i=1; i<=13; i++) {
      apupakka.lisaaKortti(new Kortti(Maa.HERTTA, i));
      apupakka.lisaaKortti(new Kortti(Maa.RUUTU, i));
      apupakka.lisaaKortti(new Kortti(Maa.PATA, i));
      apupakka.lisaaKortti(new Kortti(Maa.RISTI,i));
    }
    return apupakka;
  }

  /* Palauttaa pakan tiedot merkkijonona. Ei hyödyllinen graafista käyttöliittymää tehdessä. */
  toString() {
    return this.kortit.map(Kortti=>Kortti.toString()).join(', ');
  }
};
