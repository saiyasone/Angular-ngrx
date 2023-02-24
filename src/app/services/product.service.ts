import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // photo => id, title, url, thumbnailUrl
  getAllPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url + '/photos');
  }
}
