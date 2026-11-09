/* Tämä moduuli sisältää maiden (pata, risti, hertta, ruutu) määrittelyt. */
/* Ominaisuuksiin viitataan pistenotaatiolla, eli esim. jos muuttujan nimi on maa, niin maa.nimi, maa.symboli tai maa.vari. */

export const Maa={
  PATA:Object.freeze({nimi:'pata', symboli:'\u2660', vari:'musta'}),
  RISTI:Object.freeze({nimi:'risti', symboli:'\u2663', vari:'musta'}),
  HERTTA:Object.freeze({nimi:'hertta', symboli:'\u2665', vari:'punainen'}),
  RUUTU:Object.freeze({nimi:'ruutu', symboli:'\u2666', vari:'punainen'})
};