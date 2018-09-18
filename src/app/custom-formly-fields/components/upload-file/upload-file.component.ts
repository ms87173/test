
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { ApiService } from '../../../core';
import { environment } from '../../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

import { ResponseContentType } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent extends FieldArrayType implements OnInit {
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  @Output() uploadResponse = new EventEmitter();
  humanizeBytes: Function;
  dragOver: boolean;
  Options: UploaderOptions;
  fileUpload = true;
  data: string;
  fileUploaded = false;
  respData = false;
  clearIntervalTime = false;
  dataTimer: any;
  speedCalculater = 0;
  bsFiles = new BehaviorSubject([]);
  constructor(builder: FormlyFormBuilder, private apiService: ApiService, private http: HttpClient) {
    super(builder);
    this.Options = { concurrency: 1, maxUploads: 1 };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }
  onUploadOutput(output: UploadOutput): void {
    // console.log('out-----', output);
    this.fileUploaded = true;
    if (output.type === 'allAddedToQueue') {
      const event: UploadInput = {
        type: 'uploadAll',
        url: `${environment.apiBaseUrl}document/upload`,
        method: 'POST',
        file: this.files[0],
      };
      this.uploadInput.emit(event);
    //  console.log(this.files[0], '::::files', UploadStatus);
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      //  this.files.push(output.file);
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
    } else if (output.type === 'start') {
      this.files.push(output.file);
    }

    this.files = this.files.filter(file => {
      this.fileUpload = false;
      const data = file.progress.status !== UploadStatus.Done;
    //  console.log('files-status----', data, file);
      return data ? data : file;
    });
    // console.log('file-outer', this.files);
    this.bsFiles.next(this.files);
    this.bsFiles.subscribe((data) => {
      if (data.length > 0) {
        console.log(data[0].progress.data, 'files-subscribe', data);
      }
    });

  //   console.log('check available files', this.files);
  //   clearInterval(this.dataTimer);
  //   this.dataTimer = setInterval(() => {
  //     if (this.files[0] && this.files[0].response) {
  //       console.log(':::inside', this.files[0].response);
  //       this.clearIntervalTime = true;
  //         clearInterval(this.dataTimer);
  //     } else if(this.files[0]) { 
  //   this.speedCalculater = this.speedCalculater + Number(this.files[0]['progress']['data']['speed']);
  //   console.log(this.speedCalculater, '::::not yet', this.files[0]['progress']['data']); 
  // }
  //   }, 1000);
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

  downloadFile(data) {
    this.apiService.get(`document/download/downloadGet/${data.documentId}/${data.fileName}`)
    .map(resp => {
      const ab = new Blob([resp]);
      console.log('resp blob', resp); return resp; })
    .subscribe(res => {
      this.downloadFile1(res);
      console.log('start download:', res);
    });
  }
  downloadFile1(data) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    console.log('df-i', data, blob, url);
  }
  ngOnInit() {}
}
