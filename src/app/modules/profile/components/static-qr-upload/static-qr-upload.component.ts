import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-static-qr-upload',
  standalone: false,
  templateUrl: './static-qr-upload.component.html',
  styleUrl: './static-qr-upload.component.scss'
})
export class StaticQRUploadComponent {
  previewUrl: string | ArrayBuffer | null = null;
  isDragging = false;
  @Input() userId!: string;
  @Output() closeOverlay = new EventEmitter();
  selectedFile: File | null = null;

  constructor(private apiService: ApiService) {

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.processFile(event.dataTransfer.files[0]);
    }
  }

  private processFile(file: File) {
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PNG or JPG image.');
    }
  }

  async uploadFile() {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    await this.apiService.put({
      params: this.userId,
      url: `user/update-static-qr/${this.userId}`,
      body: formData
    });
    this.closeOverlay.emit()
  }

  
}
