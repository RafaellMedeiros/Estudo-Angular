import { Component } from '@angular/core';
import { PhotoService } from '../photo/photo.servece';
import { Photo } from '../photo/photo';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent
  ],
  
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}
  
  ngOnInit(): void {
    this.photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
