
import { Component, OnInit, EventEmitter } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { ApiService } from '../../../core';
@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent extends FieldArrayType implements OnInit{
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  Options: UploaderOptions;
  fileUpload: boolean = true;
  constructor(builder: FormlyFormBuilder, private apiService: ApiService) {
    super(builder);
    this.Options = { concurrency: 1, maxUploads: 3 };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;

  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') {
      const event: UploadInput = {
        type: 'uploadAll',
        url: 'https://ngx-uploader.com/upload',
        method: 'POST',
        file: this.files[0],
      };
    //  this.apiService.post('/request/details', this.files[0]);
      this.apiService.post('/questionnaire/document/upload', this.files[0]);
      // /api/ddo/questionnaire/document/upload
    //  this.apiService.get('request');
     this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.files = this.files.filter(file => {
      this.fileUpload = false;
      return file.progress.status !== UploadStatus.Done
    });
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
  ngOnInit(){}
}
