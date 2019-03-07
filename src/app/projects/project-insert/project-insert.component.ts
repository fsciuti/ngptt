import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Project } from '../../shared/Project';
import { ProjectService } from '../../shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngptt-project-insert',
  templateUrl: './project-insert.component.html',
  styles: [`
  .form-control.ng-invalid.ng-touched {
    border: 1px solid red;
  }
  `]
})
export class ProjectInsertComponent implements OnInit {
  @Input() quickInsert = false;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  submitProjectForm(form: NgForm) {
    this.projectService.add({
        id: Symbol(),
        code: Math.random().toString(36).replace('0.', '').substring(2, 9),
        done: false,
        start: form.value.start ? form.value.start : new Date(),
        tasks: [],
        ...form.value
    });

    this.router.navigate(['/projects']);
  }
}
