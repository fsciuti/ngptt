import { Injectable } from '@angular/core';
import { Project } from '../Project';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectSubject = new Subject<Project>();
  public project$ = this.projectSubject.asObservable();

  private projectsUrl = 'api/projects';
  
  constructor(private http: HttpClient) {}

  add(project: Project) {
      return this.http.post<Project>(this.projectsUrl, project, httpOptions).pipe(
        tap((newProject: Project) => console.log(`added project w/ id=${newProject.id}`)),
        catchError(this.handleError<Project>('addProject'))
      );
  }

  getAll() {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError('getProjects', []))
      );
  }

  get(id: string | number) {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => console.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  update(project: Project) {
    return this.http.put(this.projectsUrl, project, httpOptions).pipe(
      tap(_ => console.log(`updated project id=${project.id}`)),
      catchError(this.handleError<any>('updateProject'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
