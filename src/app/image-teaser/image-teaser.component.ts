import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-image-teaser',
  templateUrl: './image-teaser.component.html',
  styleUrls: ['./image-teaser.component.css']
})
export class ImageTeaserComponent implements OnInit {
  @Input()
  condition:string;
  @Input()
  taille:string;

  constructor() { }

  ngOnInit() {
  }

}
