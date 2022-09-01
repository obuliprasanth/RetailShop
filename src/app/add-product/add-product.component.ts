import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../helper/apiservice.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private addUser : ApiserviceService,
    private toast :ToastrService

  ) { }
  public regForm: FormGroup;
  

  ngOnInit(){

    this.regForm = this.formBuilder.group({
      productName: ["", [Validators.required]],
      availableQuantity:["", [Validators.required]],  
    })

  }
  
   //post data 
   public userSub(){
    var objdata = {
      "productName":this.regForm.value.productName,
      "availableQuantity": parseInt(this.regForm.value.availableQuantity),
    }
    console.log(objdata);
    
    this.addUser.postProduct(objdata)
    .subscribe(
      data => {
        this.addUser = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }); 
      this.toast.success("Product Added Successfully", "Success");


    console.log(this.regForm.value);
    this.regForm.reset();
  }

}
