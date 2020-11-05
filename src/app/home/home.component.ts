import { Component, OnInit ,NgModule , } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  One: boolean = false;

    FirstButton(){
        this.One = !this.One; 
    }
  temp;
  sum:number=0;
  temp1 : any='';
  totalprice=0;
  products=[];
   items=[
    {
      id:1,
      title : "SHETTLE BAT",
      price : 200,
      url : './assets/1.jpg',
      Available:true
    },
    {
      id:2,
      title: "CRICKET BAT",
      price : 500 ,
      url:'./assets/31.jpg',
      Available:true

    },
    {
      id:3,
      title: "CRICKET BALL",
      price : 50 ,
      url:'/assets/3.jpg',
      Available:true

    },
    
    {
      id:4,
      title: "SPORTS SHOES",
      price : 800 ,
      url:'./assets/4.jpg',
      Available:true

    },
    
    {
      id:5,
      title: "BASKET BALL",
      price : 600 ,
      url:'./assets/5.jpg',
      Available:true

    },
    
    {
      id:6,
      title: "Volley Ball",
      price : 400 ,
      url:'./assets/6.jpg',
      Available:false

    },
    
    {
      id:7,
      title: "TENNIS BALL",
      price : 80 ,
      url:'./assets/7.jpg',
      Available:true

    },
    
    {
      id:8,
      title: "CRICKET HELMET",
      price : 300 ,
      url:'./assets/8.jpg',
      Available:false

    },
    
    {
      id:9,
      title: "INDIAN JERSEY",
      price : 300 ,
      url:'./assets/9.jpg',
      Available:true

    },
    {
      id:10,
      title: "CHESS BOARD",
      price : 350 ,
      url:'./assets/10.jpg',
      Available:true

    },
    {
      id:11,
      title: "GLOVES",
      price : 150 ,
      url:'./assets/11.jpg',
      Available:true

    },
    {
      id:12,
      title: "HOCKEY BAT",
      price : 300 ,
      url:'./assets/12.jpg',
      Available:true

    },
   
  ]

  productid(i){
    this.temp1=this.temp;
    this.totalprice = i.price*this.temp1;
    this.products.push({id : i.id , price : i.price ,title:i.title , url:i.url , Quantity:this.temp, Totalprice:this.totalprice ,Available:i.Available} );
    this.temp=null;
    this.sum=this.sum+this.totalprice;    
    }
    
  

  constructor() { }
  ngOnInit(): void {
  }
}
