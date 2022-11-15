import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.scss']
})
export class PokemonDetailsPageComponent implements OnInit {

  pokemon: any = {};
  pokemonType=[];
  pokemonTypeSecond=[];
  pokemonImg='';
  pokemonStats = [];
  pokemonFlavorEntries: any = {};
  pokemonGender: any={};
  pokemonHeight: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonDataService:PokemonDataService, private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let pokemonId = this.activatedRoute.snapshot.params['id'];
    this.pokemonDataService.getPokemonById(pokemonId).subscribe(
      res=>{
        this.pokemon=res;
        console.log('ngoninit',this.pokemon )
        this.pokemonImg=this.pokemon.sprites.front_default;
        this.pokemonType=res.types[0].type.name;
        this.pokemonTypeSecond=res.types[1].type.name;
      },
      err=>{
        console.log(err);
      }
    );

    this.pokemonDataService.getPokemonStatsById(pokemonId).subscribe(
      res => {
        this.pokemonStats = res.stats;
        this.pokemonHeight=res.height;
      });

      this.pokemonDataService.getPokemonGenderById(pokemonId).subscribe(
        res => {
          this.pokemonGender = res;
          console.log(this.pokemonGender)
        });

      this.pokemonDataService.getPokemonSpeciesById(pokemonId).subscribe(
        res => {
          this.pokemonFlavorEntries = res.flavor_text_entries.filter((element: { language: { name: string; }; }) => element.language.name==='en');
        }
      )
  }
}
