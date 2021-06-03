import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  account_details: any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

  }

  constructor() { }


  register(name: any, accno: any, password: any) {

    let dataset = this.account_details;

    if (accno in dataset) {
      return false;
    }
    else {
      this.account_details[accno] = {
        name,
        accno,
        password,
        amount: 0
      }
      return true;
    }

  }

  login(accno: any, pwd: any) {

    let dataset = this.account_details;

    if (accno in dataset) {
      if (pwd == dataset[accno]["password"]) {

        return true;

      }
      else {
        alert("Incorrect Password");
        return false;
      }

    }

    else {
      alert("Invalid Account Number");
      return false;
    }

  }

  deposit(accno: any, pswd: any, amt: any) {

    var amount = parseInt(amt)
    let dataset = this.account_details;

    if (accno in dataset) {

      if (pswd == dataset[accno]["password"]) {
        dataset[accno]["amount"] += amount;
        return dataset[accno]["amount"];

      }
      else {
        alert("Incorrect Password");
        return false;
      }

    }
    else {
      alert("Invalid Account Number");
      return false;
    }


  }


  withdraw(accno: any, pswd: any, amt: any) {

    var amount = parseInt(amt)
    let dataset = this.account_details;

    if (accno in dataset) {

      if (pswd == dataset[accno]["password"]) {

        if(amount<dataset[accno]["amount"]){
          dataset[accno]["amount"] -= amount;
          return dataset[accno]["amount"];

        }
        else{
          alert("Insufficient Balance");
          return false;
        }
        
      }
      else {
        alert("Incorrect Password");
        return false;
      }

    }
    else {
      alert("Invalid Account Number");
      return false;
    }


  }
}