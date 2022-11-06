import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from '../services/pokemon-data.service';
// import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.scss']
})
export class PokemonDetailsPageComponent implements OnInit {

  constructor(
    private pokemonDataService:PokemonDataService, private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  
  // pokemon:Pokemon | undefined;

  // getPokemonById(id:number){
  //   this.dataService.getPokemonById(id).subscribe
  // }
}
