import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

/*import { pokemon } from './../../../node_modules/pokemontcgsdk';*/

@Component({
  selector: 'app-mtg',
  templateUrl: './mtg.page.html',
  styleUrls: ['./mtg.page.scss'],
})
export class MtgPage implements OnInit {
  imageUrls = [''];
  build = {
    message: 'Under Construction',
    what: 'Pokemon TGC'
  };

  constructor() {
    /*pokemon.configure({apiKey: ''});*/
  }

  ngOnInit() {}

  /*getPokemon() {
    pokemon.card.find('base1-4').then((card) => {
      console.log(card.name); // "Charizard"
    });
  }*/
}
