import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  aim = "Registration page";

  registerForm = this.fb.group({
    accnum: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

   

    var uname = this.registerForm.value.uname;
    var accnum = this.registerForm.value.accnum;
    var pswd = this.registerForm.value.pswd;

    if (this.registerForm.valid) {
      const result = this.ds.register(uname, accnum, pswd)
      if (result) {
        alert("Registration successful");
        this.router.navigateByUrl("");
      }
      else {
        alert("User is already exist,please Log in");

      }
    }
    else{
      alert("Invalid Form")
    }


  }


}
