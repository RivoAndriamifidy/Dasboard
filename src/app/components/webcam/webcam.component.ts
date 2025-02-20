import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FaceRecognitionService } from '../../services/face-recognition.service';

@Component({
  selector: 'app-webcam',
  standalone: false,
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
  detectedFaces: any[] = [];
  detectionDate: Date | null = null; // Propriété pour stocker la date et l'heure de la détection
  welcomeMessage: string = '';

  constructor(private faceRecognitionService: FaceRecognitionService) {}

  ngOnInit(): void {
    this.startCamera();
  }

  startCamera(): void {
    // Vérifie qu'on est côté client et que l'API mediaDevices est disponible
    if (typeof window !== 'undefined' && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          console.log("Webcam accessible");
          // Associer le flux vidéo à l'élément <video>
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
        })
        .catch(err => {
          console.error("Erreur d'accès à la webcam : ", err);
        });
    } else {
      console.log("Webcam non accessible côté serveur");
    }
  }

  capture(): void {
    // Appelle l'API Flask pour détecter les visages
    this.faceRecognitionService.detectFaces().subscribe(
      response => {
        this.detectedFaces = response.faces;
        
        // Enregistre la date et l'heure de la détection
        this.detectionDate = new Date();
  
        // Si un visage est détecté, enregistre le message de bienvenue
        if (this.detectedFaces && this.detectedFaces.length > 0) {
          const name = this.detectedFaces[0].name;
          this.welcomeMessage = `Bienvenue, ${name} ! Je vous souhaite une très belle journée !`;
          
          // Lire à haute voix le message de bienvenue
          this.speakText(this.welcomeMessage);
        }
  
        console.log("Détection réussie :", response.faces);
  
        // Pour chaque visage détecté, lire le nom à haute voix
        //this.detectedFaces.forEach(face => {
          //this.speakText(`Nom détecté : ${face.name}`);
       // });
      },
      error => {
        console.error('Erreur lors de la détection des visages', error);
        
        alert("Erreur serveur : " + JSON.stringify(error.error));
      }
    );
  }
   

  speakText(text: string): void {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'fr-FR';  // Langue française (tu peux la changer si besoin)
    window.speechSynthesis.speak(speech);
  }
  
}
