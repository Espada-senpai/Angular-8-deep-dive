import { Component, ContentChild, Input, OnInit, Optional, Host } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {


  @Input() label: string;
  @ContentChild(NgControl,{static:false}) control : NgControl;
  get form(): NgForm | FormGroupDirective {
    return this.ngForm || this.formGroupDir;
  }

  constructor(@Optional() @Host() public ngForm: NgForm,
              @Optional() @Host() public formGroupDir: FormGroupDirective) { }

            
  ngOnInit() {
  }

}
