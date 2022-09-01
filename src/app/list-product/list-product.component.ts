import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiserviceService } from '../helper/apiservice.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements AfterViewInit  {
  
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtTrigger: Subject<any> = new Subject();
  
  dtOptions: DataTables.Settings = {};
  product: any;
  

  constructor(public service : ApiserviceService) { }

  ngOnInit(){

   //Page Nation
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 6,
        processing: true
      };
    //get userlist data  
    this.service.getproductlist().subscribe((res)=>{
      console.log("store follow up")
      console.log(res);
      this.product = res;
      });
  }

   //pagenation tigger
   ngAfterViewInit(): void {
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

 

}
