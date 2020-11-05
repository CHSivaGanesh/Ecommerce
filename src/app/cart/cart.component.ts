import { Component, OnInit ,Input, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   sum=0; 
@Input() firstwonder : boolean
@Input() Products=[];
@Input() Totalsum;
remove(i)
{

 i.id=null;
  i.title=null;
  i.price=null;
  i.Totalprice=null;
  i.Quantity=null;
  this.calTotal(i);
}

calTotal(i)
{
  this.Totalsum=this.Totalsum-i.Totalprice;
  
}

  constructor() { }


  ngOnInit(): void {
  }

}
