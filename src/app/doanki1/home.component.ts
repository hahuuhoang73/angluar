import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'doanki1',
  templateUrl:'./home.component.html'
})
export class HomeComponent{

  onactive(){
    window.scroll(0,0);
  }
  sanpham1:any[]=[  ];



  constructor(private http:HttpClient) {
  }



  ngOnInit(){//ham này tự động chạy sau khi in ra html

    this.sanpham();

  }

  sanpham(){
    const url = `http://localhost:3704/product4`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.sanpham1 = data;

      })
  }



}
