import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllRewviews():Observable<any>
  {
    return this._HttpClient.get("http://ataal.somee.com/api/ReviewController1/GetAllReviews")
  }

  
  GetReviewByID(id:any):Observable<any>
  {
    return this._HttpClient.get(`http://ataal.somee.com/api/ReviewController1/GetReviewByID/${id}`)
  }


  DeleteReview(id: number): Observable<HttpResponse<any>> {
    return this._HttpClient.delete(` http://ataal.somee.com/api/ReviewController1/DeleteReview?id=${id}`, { observe: 'response' });
  }


}
