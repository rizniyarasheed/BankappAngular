import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser="";

  currentAcc="";

  account_details: any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

  }

  constructor(private http:HttpClient) { 
    this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("account_details",JSON.stringify(this.account_details))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
      
    }
    if(this.currentAcc){
      
      localStorage.setItem(" currentAcc",JSON.stringify(this. currentAcc))
    }


  }

  getDetails(){
    if(localStorage.getItem("account_details")){
      this.account_details=JSON.parse(localStorage.getItem("account_details") || '')
    }
    if(localStorage.getItem("currentUser") ) {
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
      //this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") || '')
    }
    if(localStorage.getItem("currentAcc") ) {
     // this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") || '')
    }
    
   
  }

  deleteAccDetails(acno:any){
    if(this.currentAcc==acno){
      localStorage.removeItem("currentAcc")
      this.saveDetails();
      return true;
    }
    else{
      return false;
    }
  }


  register(name: any, accno: any, password: any) {

   // const data={
   //   name,
   //   accno,
   //   password

    //}

    //return http verb/method ("server path",user data)
   // this.http.post("http://localhost:3000/register",data)

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
      this.saveDetails();
      return true;
    }

  }

  login(accno: any, pwd: any) {

    let dataset = this.account_details;

    if (accno in dataset) {

      if (pwd == dataset[accno]["password"]) {
        this.currentUser = dataset[accno]["name"]
        this.currentAcc = accno
        this.saveDetails();
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
        this.saveDetails();

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
          this.saveDetails();

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