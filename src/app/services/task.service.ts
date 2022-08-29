import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import{Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({ 
    contentType: 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5003/users/tasks';

  constructor(private http:HttpClient) { 

  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${localStorage.getItem('uid')}`);
  }

  deleteTasks(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.delete<Task>(url);

  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
