import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    // public alerts: Array<any> = [];
    // public sliders: Array<any> = [];

    constructor() {
    
    }
    @ViewChild('json',{static:false}) jsonElement?: ElementRef;
    public form: Object = {
      components: []
    };
  
  
    ngOnInit() {}
    onChange(event) {
        // this.jsonElement.nativeElement.innerHTML = '';
        // this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
     localStorage.setItem('Form',JSON.stringify(event.form));
    }
}
