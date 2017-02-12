import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Widget } from './widget';

@Injectable()
export class WidgetService {

  constructor(private http: Http) {

  }

  getAllWidgets(): Observable<Widget[]> {
    return this.http.get('http://deployazurewithsql20170211124642.azurewebsites.net/api/values')
      .map((res: Response) => res.json())
      .catch(this.handleError);;
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  deleteWidget(widgetId: number): Observable<any> {
    let url = "http://deployazurewithsql20170211124642.azurewebsites.net/api/values/" + widgetId

    return this.http.delete(url).map((res : Response) => res.json())
    .catch(this.handleError);

  }
  
}
