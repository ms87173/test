import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private apiService: ApiService) { }
    uploadFile(){            
    return this.apiService.post('/api/ddo/questionnaire/document/upload/', );
  }
}
