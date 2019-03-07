import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../shared/Project';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: []
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  project$: Observable<Project>;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(params.get('code')))
    );
  }

}
