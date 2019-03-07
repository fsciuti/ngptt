import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngptt-project-search',
  templateUrl: './project-search.component.html',
  styles: []
})
export class ProjectSearchComponent implements OnInit {
  @Output() searching = new EventEmitter<{name: string, priority: string, done: string}>();
  @ViewChild('filterName') name: ElementRef;
  @ViewChild('filterPriority') priority: ElementRef;
  @ViewChild('filterDone') done: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searching.emit({
      name: (<HTMLInputElement>this.name.nativeElement).value,
      priority: (<HTMLInputElement>this.priority.nativeElement).value,
      done: (<HTMLInputElement>this.done.nativeElement).value,
    })
  }

}
