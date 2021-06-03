import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno="";
  pswd="";
  amount="";

  wacno="";
  wpswd="";
  wamount="";


  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){

    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;

    const result = this.ds.deposit(acno,pswd,amount)

    if(result){
      alert(" amount " + amount + " credited Successfully and new balance is :"+ result);
    }

    
  }

  withdraw(){

    var acno=this.wacno;
    var pswd=this.wpswd;
    var amount=this.wamount;

    const result = this.ds.withdraw(acno,pswd,amount)

    if(result){
      alert(" amount " + amount + " debited Successfully and balance is :"+ result);
    }

    
  }

}
