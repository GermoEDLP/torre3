import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  private url: string = "https://us-central1-torretres-dev.cloudfunctions.net/mailer";

  constructor(private http: HttpClient) { }


  enviarMail(name: string, email: string, subject: string, message: string){

    let data = {
      "to": "braian.indu06@gmail.com",
      "message": `<h3>Este mensaje fue enviado desde la web:</h3>
      <ul>
        <li><b>Envía: </b>${name}</li>
        <li><b>Email: </b>${email}</li>
        <li><b>Asunto: </b>${subject}</li>
        <li><b>Mensaje: </b>${message}</li>
      </ul>`,
      "subject": "Mail desde la web" 
    };

    return this.http.post(this.url, data);
  }

}
