import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-of-pokemons',
  templateUrl: './list-of-pokemons.component.html',
  styleUrls: ['./list-of-pokemons.component.scss']
})
export class ListOfPokemonsComponent implements OnInit {
pokemons: any[] = [];
page = 1;
  totalPokemons!: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.dataService.getPokemons(24, (this.page - 1) * 24)
    .subscribe((response: any) => {
      this.totalPokemons=response.count;
      response.results.forEach((result : any) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          this.pokemons.sort(function(a, b) { 
            return a.id - b.id  ||  a.name.localeCompare(b.name);
          });
          console.log(this.pokemons);
        });
      });
    });
  }
}
