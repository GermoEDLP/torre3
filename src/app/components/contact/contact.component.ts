import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MailerService } from '../../services/mailer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  valid: boolean = false;
  enviado: boolean = false;
  error: boolean = false;
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor(private _mailer: MailerService) { }

  ngOnInit(): void {
  }

  public resolved(captchaResponse: string) {
    if(captchaResponse != null){
      this.valid = true;
    }else{
      this.valid = false;
    }
  }

  enviarMail(){
    if(this.valid){
      this._mailer.enviarMail(this.name, this.email, this.subject, this.message).subscribe((res: any)=>{
        if(res.message == "mensaje enviado"){
          this.name = this.email = this.subject = this.message = "";
          this.enviado = true
        }else{
          this.error = true;
        }
        
      })
    }
    
  }

}
