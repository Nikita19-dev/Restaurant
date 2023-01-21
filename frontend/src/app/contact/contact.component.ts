import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedback = '[a-zA-Z]'
  durationInSeconds = 5;
  contactform: any;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {

  }



  ngOnInit(): void {
    this.contactform = this.formBuilder.group({
      username: ['', [Validators.required]],
      phoneno: ['', Validators.required],
      emailid: ['', Validators.email],
      feedback: ['', Validators.required]


    })
  }
  openSnackBar() {
    this._snackBar.open("Hurrey!🙂. Your request submitted successfully", '', { duration: 1000 });
  }
}
