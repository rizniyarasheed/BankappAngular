import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "your Perfect Banking partner";
  accountNumber = "Account Number please"
  accnum = "";
  pswd = "";

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  accnoChange(event: any) {
    this.accnum = event.target.value;
    console.log(this.accnum);

  }
  pwdChange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);


  }
  login() {
    var accno = this.accnum;
    var pwd = this.pswd;

    const result = this.ds.login(accno,pwd)

    if(result){
      alert("Login Success");
      this.router.navigateByUrl("dashboard") //redirect

    }

  }

  
    register(){

      this.router.navigateByUrl("register");

    }

  }


