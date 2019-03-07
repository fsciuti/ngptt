import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Project } from '../../shared/Project';
import { ProjectService } from '../../shared/services/project.service';

@Component({
    selector: 'ngptt-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit, OnDestroy {
    projectsSubscription: Subscription;
    projects: Project[] = [];

    selectedProject: Project;
    searchedProject: Project;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectsSubscription = this.projectService.projects$.subscribe((data) => this.projects = data);
    }

    selectProject(project: Project) {
        this.selectedProject = this.projectService.get(project.id);
    }

    addProject(project: Project) {
       this.projectService.add(project);
    }

    searchProject(project: Project) {
        this.searchedProject = project;
    }
    
    ngOnDestroy() {
        this.projectsSubscription.unsubscribe();
    }
}