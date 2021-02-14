import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

private url = 'https://jsonplaceholder.typicode.com/posts';

  public getData(): Observable<any> {
      return this.http.get(this.url);
  }
}