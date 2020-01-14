## mock data
```
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
```

```
{
    'id': Symbol(),
    'name': 'Task di Prova',
    'start': new Date(2018, 2, 8),
    'duration': 10,
    'isBillable': true
},
{
    'id': Symbol(),
    'name': 'Task di Prova 2',
    'start': new Date(2018, 2, 15),
    'duration': 10,
    'isBillable': true
}
```

## step-1-setup
#### app.component.html

```
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
  <a class="navbar-brand" href="#">NG Project Tracking Tool</a>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Progetti</a>
      </li>
    </ul>
  </div>
</nav>
```

## step-2-firstcomponent
#### project-list.component.html

```
<div class="card-columns">
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><span class="badge badge-light float-right">Codice</span> Nome Progetto</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <small>Data Inizio</small>
                    <small> - Data Fine</small>
                </h6>
                <p class="card-text">Descrizione</p>
                <a href="#" class="btn btn-primary btn-sm">Vai al Progetto</a>
            </div>
        </div>    
    </div>
  </div>
  <p>Progetto Selezionato</p>
  ```

## step-3-filterdatawithpipe
#### project-list.component.html

```
<div>
    <h2>I miei progetti</h2>
    <hr />
    <div class="row">
        <div class="col">
            <input class="form-control" name="projectName" placeholder="cerca progetto"/>
        </div>
        <div class="col">
            <select class="form-control">
                <option></option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div class="col">
            <select class="form-control">
                <option></option>
                <option value="true">Done</option>
                <option value="false">In progress</option>
            </select>
        </div>
    </div>
</div>
<hr />
  ```

#### search-filter.pipe.ts
```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!value) { return items; }
    if (!items) { return []; }

    return items.filter(it => {
      if (typeof (it[field]) !== 'boolean') {
        return it[field].toLowerCase().includes(value.toLowerCase());
      } else {
        return (it[field]) === (value === 'true');
      }
    });
  }
}
```

## step-4-formaddproject
#### project-list.component.html

```
<hr/>
<form>
    <div class="form-row">
        <div class="form-group col-md-6">
            <input 
                type="text" 
                name="name" 
                class="form-control" 
                placeholder="Nome">
                <p class="text-danger"><small>Il campo è richiesto</small></p>
        </div>
        
        <div class="form-group col-md-6">
            <select 
                class="form-control" 
                name="priority">
                    <option value="low" >Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
            </select>
            <p class="text-danger"><small>Il campo è richiesto</small></p>
        </div>
    </div>
    <div class="form-group">
        <textarea 
            class="form-control"
            name="description" 
            placeholder="Descrizione"
            required>
        </textarea>
        <p class="text-danger"><small>Il campo è richiesto</small></p>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <input 
                type="date"
                name="start" 
                class="form-control" 
                placeholder="Data Inizio">
                <p class="text-danger"><small>Il campo è richiesto</small></p>
        </div>
        <div class="form-group col-md-6">                
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Crea</button>
</form>
  ```

## step-5-splitprojectlistcomponent
#### project-detail.component.html

```
<hr/>
<div>
  <dl class="row">
    <dt class="col-sm-3">Code</dt>
    <dd class="col-sm-9"></dd>
    <dt class="col-sm-3">Nome</dt>
    <dd class="col-sm-9"></dd>
  </dl>
</div>
  ```

## step-7-routing
#### project-detail|project-list|project-insert.component.html

```
<div class="row mt-5 justify-content-end">
    <div class="col-8">
        <h2 class="">Aggiungi Progetto</h2>
    </div>
    <div class="col text-right">
        <button class="btn btn-link">Torna a Progetti</button>
    </div>
</div>
  ```

## step-8-projectnavheadercomponent
#### project-detail.component.html

```
<div class="jumbotron">
  <h1 class="display-4">{{project?.name}}</h1>
  <p class="lead">{{project?.description}}</p>
  <hr class="my-4">
  <p><span>Codice: {{project?.code}} - Data Inizio: {{project?.start | date:'dd/MM/yyyy'}}</span><span
      *ngIf="project?.end">- Data Fine: {{project?.end | date:'dd/MM/yyyy'}}</span></p>
</div>
  ```

## step-11-reactiveform
#### project-detail.component.html

```
<table class="table table-sm" *ngIf="project.tasks.length; else notasks">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Data Inizio</th>
        <th scope="col">Durata (minuti)</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td><span class="badge">F</span></td>
      </tr>
    </tbody>
  </table>
  ```

  ```
  <div class="row" *ngIf="editMode">
  <div class="col">
    <form>
      <div class="form-row">
        <div class="col form-group">
          <button type="submit" class="btn btn-primary btn-sm">Salva le Modifiche</button>
          <a class="btn btn-light btn-sm">Annulla</a>
        </div>
      </div>
      <div class="form-row">
        <div class="col form-group">
          <input type="text" class="form-control" placeholder="Code" >
          <p class="text-danger">
            <small>Il campo è richiesto</small></p>
        </div>
        <div class="col-md-6 form-group">
          <input type="text" class="form-control" placeholder="Nome">
          <p class="text-danger">
            <small>Il campo è richiesto</small></p>
        </div>
        <div class="col form-group">
          <select class="form-control">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <p class="text-danger"><small>Il campo è richiesto</small></p>
        </div>
      </div>
      <div>
        <div class="form-group">
          <textarea class="form-control" placeholder="Descrizione">
                </textarea>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input type="date" class="form-control" placeholder="Data Inizio">
            <p class="text-danger"><small>Il campo è richiesto</small></p>
          </div>
          <div class="form-group col-md-6">
            <input type="date" class="form-control" placeholder="Data Fine">
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div class="row">
          <div class="col">
            <h4>Tasks</h4>
          </div>
          <div class="col text-right">
            <button class="btn btn-light btn-sm">Aggiungi
              Task</button>
          </div>
        </div>
        <hr />
        <div class="form-row align-items-center">
          <div class="col">
            <input type="text" class="form-control">
          </div>
          <div class="col">
            <input type="date" class="form-control">
          </div>
          <div class="col">
            <input type="number" class="form-control">
          </div>
          <div class="col-auto">
            <div class="form-check">
              <input type="checkbox" class="form-check-input">
              <label class="form-check-label" for="exampleCheck1">Fatturabile</label>
            </div>
          </div>
          <div class="col-auto">
            <div class="form-check">
              <span class="badge badge-danger">x</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
```
