import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType} from '@capacitor/camera'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private image:any;

  constructor() {}

  ngOnInit(): void {
    Camera.requestPermissions()
  }

  async takePicture () {
    this.image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
    });
  };

  getimage () {
    return this.image
  }

}
