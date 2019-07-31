import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
public data:any;
  constructor() { }

  ngOnInit() {
    var data=localStorage.getItem('Form');
    this.data=JSON.parse(data);
  }
 onSubmit(submission:any){
   console.log(submission);
 }

}
