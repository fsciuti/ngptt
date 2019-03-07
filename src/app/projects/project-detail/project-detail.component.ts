import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Project } from '../../shared/Project';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
export class ProjectDetailComponent implements OnInit, OnDestroy {
  @Input() project: Project;
  projectSubscription: Subscription;
  editProjectForm: FormGroup;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectSubscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(params.get('code'))),
    ).subscribe((project) => {
      this.project = project;
      this.initForm();
    })
  }

  initForm() {
    const projectTasks = new FormArray([]);
    if (this.project.tasks) {
      for (const task of this.project.tasks) {
        projectTasks.push(
          new FormGroup({
            'name': new FormControl(task.name, Validators.required),
            'start': new FormControl(new Date(task.start), Validators.required),
            'duration': new FormControl(task.duration),
            'isBillable': new FormControl(task.isBillable)
          })
        );
      }
    }

    this.editProjectForm = new FormGroup({
      'code': new FormControl(this.project.code, Validators.required),
      'name': new FormControl(this.project.name, Validators.required),
      'description': new FormControl(this.project.description),
      'priority': new FormControl(this.project.priority, Validators.required),
      'start': new FormControl(this.project.start),
      'end': new FormControl(this.project.end),
      'tasks': projectTasks
    });
  }

  onAddTask() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.editProjectForm.get('tasks')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'start': new FormControl(null, Validators.required),
        'duration': new FormControl(null),
        'isBillable': new FormControl(false)
      })
    );
  }

  onDeleteTask(index: number) {
    (<FormArray>this.editProjectForm.get('tasks')).removeAt(index);
  }

  submitProjectForm() {
  }

  ngOnDestroy() {
    this.projectSubscription.unsubscribe();
  }
}
