import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AlertMessage} from "./alter-message.model";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  private messages$$ = new Subject<AlertMessage>();

  publish(alertMessage: AlertMessage) {
    this.messages$$.next(alertMessage);
  }

  messages(): Observable<AlertMessage> {
    return this.messages$$.asObservable();
  }
}
