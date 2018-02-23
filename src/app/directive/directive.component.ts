import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public firstLink: number = 1 ;
  public secondLink: number = 2 ;
  public thirdLink: number = 3 ;
  public status: boolean = true ;
  public text:string[] = ['un','deux','trois'];


  constructor() { }

  ngOnInit() {
  }

  inverseStatus(){
    this.status = !this.status ;
    console.log(this.status);
  }

}
