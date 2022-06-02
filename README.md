# Liikuntakoutsaus

PROJEKTIN KUVAUS

Helsingin Kaupungin sisäinen työkalu, jota käytetään Helsingin kaupungin työntekijöiden liikuntaneuvonta-tarpeiden arvioimiseen.

Käyttäjät vastaavat lomaketyyliseen monivaihekyselyyn, jonka tulosten perusteella voidaan arvioida heidän voimavaransa ja liikuntakoutsauksen tarpeellisuuden suhteessa heidän nykytilanteeseensa.

Työkalu integroidaan selainympäristöön (intraan).

Työkalun sisäinen logiikka;

1. Esikysely, joka arvioi, onko käyttäjän työkyky tarpeeksi hyvä liikuntakoutsauksen saamiseen.
   -> Jos työkyky on tarpeeksi hyvä, käyttäjä siirtyy pääkyselyyn.

2. Pääkyselyssä käyttäjä arvioi omia tarpeitaan ja liikuntatottumuksiaan, ja vastaa kysymyksiin.
   -> Koutsaustarvetta puoltavista vastauksista käyttäjälle kertyy pisteitä.

3. Kun käyttäjä on vastannut kaikkiin kysymyksiin, työkalu laskee yhteen pisteet ja kertyneen pistemäärän mukaan tulostaa käyttäjälle kyselyn tulokset.
   -> Jos pistemäärä ylittää rajan, suositellaan koutsausta, ja tarjotaan linkki ajanvarauspalveluun.
   -> Jos pistemäärä alittaa rajan, käyttäjää suositellaan jatkamaan nykyisten liikuntatottumustensa noudattamista
