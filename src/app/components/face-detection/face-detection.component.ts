import { Component } from '@angular/core';
import { FaceRecognitionService } from '../../services/face-recognition.service';

@Component({
  selector: 'app-face-detection',
  standalone: false,
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent {
  faces: any[] = [];
  errorMessage: string = '';

  constructor(private faceRecognitionService: FaceRecognitionService) {}

  detectFaces() {
    this.errorMessage = '';
    this.faceRecognitionService.detectFaces().subscribe(
      (response) => {
        this.faces = response.faces;
      },
      (error) => {
        this.errorMessage = "Erreur lors de la détection.";
        console.error(error);
      }
    );
  }
}
