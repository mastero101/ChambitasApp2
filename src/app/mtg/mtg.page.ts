import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import axios from 'axios';

@Component({
  selector: 'app-mtg',
  templateUrl: './mtg.page.html',
  styleUrls: ['./mtg.page.scss'],
})
export class MtgPage implements OnInit {
  imageUrls = [''];
  build = {
    message: 'Under Construction',
    what: 'Pokemon TGC',
  };
  card: any;
  imgeUrls = [];
  element: any;
  name: any;
  stage: any;
  types: any;
  hp: any;
  priceTCGPlayer: any;

  constructor(private http: HttpClient) {
    /*PokemonTCG.({ apiKey: '402a62a4-e172-4e5e-bf0c-f8d0ebc83541' });*/
  }

  ngOnInit() {}

  getPokemon() {
    PokemonTCG.findCardByID('xy7-54').then((card: PokemonTCG.Card) => {
      console.log(card.name);// Gardevoir
  });
  }

  getAxiosData(){
    axios.get('https://api.pokemontcg.io/v2/cards/xy7-52')
    .then(response => this.element = response.data);
    console.log(this.element.data.images.large);
    this.imgeUrls = this.element.data.images.large;
    this.name = this.element.data.name;
    this.stage = this.element.data.subtypes;
    this.types = this.element.data.types;
    this.hp = this.element.data.hp;
    this.priceTCGPlayer = this.element.data.tcgplayer.prices.normal.market;
  }

  getAxiosData2(){
    const element = document.querySelector('#get-request .result');
     axios.get('https://api.npms.io/v2/search?q=axios')
      .then(response => element.innerHTML = response.data.total);
  }
}
