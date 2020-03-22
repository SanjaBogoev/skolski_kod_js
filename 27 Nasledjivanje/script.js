import {Vozilo} from "./modules/vozilo.js";
import {Automobil} from "./modules/automobil.js";
import { Kamion } from "./modules/kamion.js";

let v1 = new Vozilo('drumsko', 'crvena');
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil('drumsko', 'plava', 'NI-111AA');
a1.ispisiVozilo();
a1.vozi();
console.log(a1.boja);
a1.ispisiAutomobil();
//v1.ispisiAutomobil(); // NE RADI jer roditeljska klasa ne nasledjuje propertije iz potklase

let k1 = new Kamion('drumsko', 'siva', 4);
k1.ispisiKamion();
