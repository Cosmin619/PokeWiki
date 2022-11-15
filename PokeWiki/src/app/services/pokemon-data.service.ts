import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../shared/pokemon-view';
import { SimplePokemon } from '../shared/simple-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private baseURL: string | undefined;

  constructor(private http: HttpClient) { 
    this.baseURL=environment.baseURL;
  }
  // pokemons: Pokemon[]=[];

  getPokemons(limit:number, offset: number)/*: Observable<SimplePokemon[]>*/{
    return this.http.get(`${this.baseURL}?limit=${limit}&offset=${offset}`);
    // .pipe(
    //   map((x: any)=>{
    //     return (x as Array<any>).map((y)=>new SimplePokemon().serialize(y));
    // }));
  }

  getPokemonByName(name: string){
    return this.http.get(`${this.baseURL}/${name}`);
  }

  getPokemonStatsById(id: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemonById(id: number){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-form/` +id);
  }

  getPokemonSpeciesById(id: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }

  getPokemonGenderById(id: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/gender/${id}`);
  }

  // loadPokemons(limit:number, offset: number): void{
  //   this.pokemons=[];
  //   this.getSimplePokemons(limit, offset).subscribe(p=>{
  //     p.forEach(ps=>{
  //       this.getPokemonByName(ps.name).subscribe(pn=>{
  //         this.pokemons.push(pn)
  //       })
  //     })
  //   })
  // }

  // getDetailedPokemons(limit:number, offset: number): Observable<DetailedPokemon[]>{

  // }
}
