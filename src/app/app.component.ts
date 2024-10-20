import { Component } from '@angular/core';
import { PhotosModule } from './photos/photos.module';
import { CommonModule } from '@angular/common';
import { PhotoService } from './photos/photo/photo.servece';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PhotosModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: Photo[] = [];

  constructor(photoService: PhotoService) {
    photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}