import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ProjectService } from '../../shared/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../../shared/Project';

@Component({
  selector: 'ngptt-project-update',
  templateUrl: './project-update.component.html',
  styles: []
})
export class ProjectUpdateComponent implements OnInit {
  projectSubscription: Subscription;
  project: Project;
  editProjectForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectSubscription = this.projectService.get(id).subscribe(project => {
      this.project = project;
      this.initForm();
    });
  }


  initForm() {
    const datePipe = new DatePipe('en-US');

    const projectTasks = new FormArray([]);
    if (this.project.tasks) {
      for (const task of this.project.tasks) {
        projectTasks.push(
          new FormGroup({
            'name': new FormControl(task.name, Validators.required),
            'start': new FormControl(datePipe.transform(task.start, 'yyyy-MM-dd'), Validators.required),
            'duration': new FormControl(task.duration, Validators.required),
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
      'start': new FormControl(datePipe.transform(this.project.start, 'yyyy-MM-dd'), Validators.required),
      'end': new FormControl(datePipe.transform(this.project.end, 'yyyy-MM-dd')),
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
    this.projectService.update({id: this.project.id , ...this.editProjectForm.value}).subscribe((project) => {
      this.router.navigate(['projects', 'detail', this.project.id]);
    });
  }

}
