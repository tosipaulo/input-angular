import { Component, OnInit, Input, Optional, Self, Inject, NgZone, DoCheck, AfterViewInit, HostListener, ViewRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, NgControl } from '@angular/forms';

import {ErrorStateMatcher, CanUpdateErrorStateCtor, mixinErrorState, CanUpdateErrorState} from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';
import { InputDirective } from './input.directive';

class MatInputBase {
  constructor(public _defaultErrorStateMatcher: ErrorStateMatcher,
              public _parentForm: NgForm,
              public _parentFormGroup: FormGroupDirective,
              /** @docs-private */
              public ngControl: NgControl) {}
}
const _MatInputMixinBase: CanUpdateErrorStateCtor & typeof MatInputBase =
    mixinErrorState(MatInputBase);

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: MatInput}]
})
export class InputComponent implements OnInit, AfterViewInit {

  @Input() formParent: FormGroup;
  @Input() config: any


  constructor() {
  }


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.formParent.controls[this.config.key].valueChanges.subscribe(res => console.log('>>', res))
    this.formParent.get(this.config.key).statusChanges.subscribe(res => console.log('>>', res))
  }


  getError() {
    /* if(this.formParent.invalid && !(this.formParent.get(this.config.key).touched || this.formParent.get(this.config.key).dirty)) {
      console.log('submit')
    } */
    return Object.keys(this.formParent.get(this.config.key).errors)[0]
  }

  get isValid() { return this.formParent.controls[this.config.key].valid; }

}
