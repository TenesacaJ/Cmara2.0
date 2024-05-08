import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private image:any;

  images: string[] = [];

  constructor() {}

  ngOnInit(): void {
    Camera.requestPermissions()
  }

  async opcionPicture () {
    this.image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri
    });
  }

  async takePicture () {
    this.image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
  };

  async galeryPicture () {
    this.image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
  };

  getImageUrl() {
    if (this.image) {
      return this.image.webPath;
    } else {
      return './assets/shapes.svg'; // o podrías devolver un valor predeterminado, dependiendo de tus necesidades
    }
  }


}
