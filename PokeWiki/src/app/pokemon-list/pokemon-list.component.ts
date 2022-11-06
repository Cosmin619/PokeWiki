import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import { Pokemon } from '../shared/pokemon-view';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: /*Pokemon[] = []*/any[] = [];
  page = 1;
  totalPokemons!: number;

  constructor(private pokemonDataService: PokemonDataService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

//pokemon card
public getPokemons(){
    this.pokemonDataService.getPokemons(30, (this.page - 1) * 30)
    .subscribe((response: any) => {
      this.totalPokemons=response.count;
      response.results.forEach((result : any) => {
        this.pokemonDataService.getPokemonByName(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          this.pokemons.sort(function(a, b) { 
            return a.id - b.id  ||  a.name.localeCompare(b.name);
          });
        });
      });
    });
  }
}
