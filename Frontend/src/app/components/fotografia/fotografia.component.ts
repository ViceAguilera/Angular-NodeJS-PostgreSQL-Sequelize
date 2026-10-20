import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'app-fotografia',
    templateUrl: './fotografia.component.html',
    styleUrl: './fotografia.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FotografiaComponent implements OnInit{
  public url: string;

  @Input() fotografia: any;
  @Input() seleccionada: any;
  
  constructor() { 
    this.url = GLOBAL.url;
  }

  ngOnInit(){
  }

}
