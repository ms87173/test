import { Injectable } from '@angular/core';
import { ReviewInformationResponse, ReviewInformationRequest } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class ReviewInformationService {

  getReviewInformationTask(reviewInformationRequest: ReviewInformationRequest): Observable<ReviewInformationResponse> {
    const url = environment.apiUrls.fetchReviewInformationTask;
    return this.apiService
      .get(url);

    // Todo: Uncomment to use Production Url
    // return this.apiService
    //   .post(url, reviewInformationRequest);

  }
  constructor(private apiService: ApiService) { }
}
