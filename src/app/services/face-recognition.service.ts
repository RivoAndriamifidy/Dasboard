import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceRecognitionService {
  private apiUrl = 'http://localhost:5000/detect'; // L'URL de l'API Flask

  constructor(private http: HttpClient) { }

  detectFaces(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
