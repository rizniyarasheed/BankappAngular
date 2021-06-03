import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accnum="";
  pswd="";
  uname="";

  aim="Registration page";

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    var uname=this.uname;
    var accnum=this.accnum;
    var pswd=this.pswd;
    

    const result=this.ds.register(uname,accnum,pswd)
    if(result){
      alert("Registration successful");
      this.router.navigateByUrl("");
    }
    else
    {
      alert("User is already exist,please Log in");
      
    }
  }


}
