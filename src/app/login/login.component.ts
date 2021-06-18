import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "your Perfect Banking partner";
 

  loginForm = this.fb.group({
    accnum: ['Account Number please', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

 // accnoChange(event: any) {
   // this.accnum = event.target.value;
    //console.log(this.accnum);

  //}
  //pwdChange(event: any) {
    //this.pswd = event.target.value;
    //console.log(this.pswd);


  
  login() {
    var accno = this.loginForm.value.accnum;
    var pwd = this.loginForm.value.pswd;

    if (this.loginForm.valid) {
      const result = this.ds.login(accno, pwd)

      if (result) {
        alert("Login Success");
        this.router.navigateByUrl("dashboard") //redirect

      }

    }
    else{
      alert("Invalid Form")
    }
   
  }



  register() {

    this.router.navigateByUrl("register");

  }

}



