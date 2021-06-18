import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""

  lDate : Date =new Date();

  depositForm = this.fb.group({
    acno : ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })


  withdrawForm = this.fb.group({
    acno : ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })

  user= this.ds.currentUser

  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  deposit() {

    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;

    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, pswd, amount)

      if (result) {
        alert(" amount " + amount + " credited Successfully and new balance is :" + result);
      }


    }
    else{
      alert("Invalid Form")
    }
  }




  withdraw() {

    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount = this.withdrawForm.value.amount;

    

    if(this.withdrawForm.valid){
      const result = this.ds.withdraw(acno, pswd, amount)

      if (result) {
        alert(" amount " + amount + " debited Successfully and balance is :" + result);
      }
    }
    else{
      alert("Invalid Form")
    }
    

  }

  deleteAcc(){
    this.acno = this.ds.currentAcc
  }

  onCancel(){
    this.acno=""
  }


  onDelete(event:any){
    
    const result = this.ds.deleteAccDetails(event)
    if(result){
      alert("Account " + event + " deleted successfully");
      this.router.navigateByUrl("");
    }
    else{
      alert("Operation denied")
    }
  }
}
