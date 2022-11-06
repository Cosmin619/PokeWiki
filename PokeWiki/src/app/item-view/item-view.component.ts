import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() url: string;

  loading: boolean = true
  onLoad() {
    this.loading = false;
}

  constructor() { }

  ngOnInit(): void {
  }

}
