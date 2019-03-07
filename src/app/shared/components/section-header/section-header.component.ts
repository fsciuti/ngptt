import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngptt-section-header',
  templateUrl: './section-header.component.html',
  styles: []
})
export class SectionHeaderComponent implements OnInit {
  @Input() buttonLabel = '';
  @Input() buttonLink = '#';
  @Input() buttonType: 'btn-link' | 'btn-primary' = 'btn-link';
  @Input() title = '';  

  constructor() { }

  ngOnInit() {
  }

}
