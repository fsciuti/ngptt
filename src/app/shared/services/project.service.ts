import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
      {
          id: 1,
          code: 'NHusYJl',
          name: 'Progetto Alpha',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 1, 31),
          end: new Date(2019, 3, 15),
          priority: 'medium',
          done: true,
          tasks: []
      },
      {
          id: 2,
          code: 'SJieYKl',
          name: 'Progetto Beta',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 3, 31),
          end: new Date(2019, 6, 15),
          priority: 'low',
          done: true,
          tasks: []
      },
      {
          id: 3,
          code: 'POjeGBs',
          name: 'Progetto Gamma',
          description: 'Lorem ipsum dolor sit amet.',
          start: new Date(2019, 8, 15),
          priority: 'low',
          done: false,
          tasks: []
      },
  ];
  
  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  public projects$ = this.projectsSubject.asObservable();

  add(project: Project) {
      this.projects.push(project);
      this.projectsSubject.next(this.projects.slice());
  }

  get(code: string) {
        return this.projects$.pipe(
            map((projects: Project[]) => projects.find(project => project.code === code))
        );
    }
}
