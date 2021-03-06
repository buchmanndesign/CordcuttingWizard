import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';
import { EmailService } from './../services/email.service';
import { MessageService } from './../services/message.service';
import { Message, MessageType } from './../models/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporterror',
  templateUrl: './reporterror.component.html',
  styleUrls: ['./reporterror.component.css']
})
export class ReporterrorComponent implements OnInit {

  constructor(private emailService: EmailService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.description);
    this.emailService.sendEmail(form.value.description)
      .subscribe(
        (res) => {
          console.log(res);
          this.messageService.handleMessage(new Message(
            MessageType.message,
            'Thank You!',
            'Thanks for reporting the problem. We will look into and fix this soon.'
          ));
        },
        err => (
          this.messageService.handleMessage(new Message(
            MessageType.error,
            'Error',
            'There was a problem sending the email. Please try sending an email manually to jsbuchmann@gmail.com. Thank you!'
          ))
        )
      )
  }

}
