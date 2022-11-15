import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './pokemon-loading-screen.component.html',
  styleUrls: ['./pokemon-loading-screen.component.scss']
})
export class PokemonLoadingScreenComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() url: string;

  private loading: boolean = true
  onLoad() {
    this.loading = false;
}

  constructor() { }

  ngOnInit(): void {
  }

}
