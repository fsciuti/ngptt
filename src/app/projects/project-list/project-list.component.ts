import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../../shared/Project';
import { ProjectService } from '../../shared/services/project.service';

@Component({
    selector: 'ngptt-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    projects$: Observable<Project[]>;

    selectedProject: Project;
    searchedProject: Project;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projects$ = this.projectService.getAll();
    }
  
    addProject(project: Project) {
       this.projectService.add(project);
    }

    searchProject(project: Project) {
        this.searchedProject = project;
    }
}