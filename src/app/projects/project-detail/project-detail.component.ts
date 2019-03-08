import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/Project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: [`
  .form-control.ng-invalid.ng-touched {
      border: 1px solid red;
  }

  .badge-danger {
      cursor: pointer;
  }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project>;
  
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.project$ = this.projectService.get(id);
  }
}
