import { Injectable } from '@angular/core';
import { ReviewInformationResponse, ReviewInformationRequest } from '../models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { ApiService } from '.';

@Injectable()
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
