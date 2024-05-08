import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private image:any;

  imagen: string='assets/shapes.svg';

  constructor() {}

  ngOnInit(): void {
    Camera.requestPermissions()
  }

  async takePicture () {
    this.image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
  };

  async galery () {
    this.image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
  };

  getimage () {
    var imageUrl = this.image.webPath;
    return this.image
  }

}
