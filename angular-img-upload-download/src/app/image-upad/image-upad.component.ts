import {
  HttpClientModule,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-image-upad',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './image-upad.component.html',
  styleUrl: './image-upad.component.css',
})
export class ImageUpadComponent {
  progress?: number;
  message?: string;
  item: Product;
  constructor(private http: HttpClient) {
    this.item = new Product();
  }
  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    this.item.path = fileToUpload.name;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http
      .post('http://localhost:5106/api/ImageUpload', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe({
        next: (event) => {
          if (
            event.type === HttpEventType.UploadProgress &&
            event.total != undefined
          )
            this.progress = Math.round((100 * event.loaded) / event.total);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
          }
        },
        error: (err: HttpErrorResponse) => console.log(err),
      });
  };
  save() {
    console.log(this.item);
    this.http
      .post('http://localhost:5106/api/ImageUpload/AddProduct', this.item)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
