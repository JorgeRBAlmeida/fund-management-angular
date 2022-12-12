import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fm-fund-add',
  templateUrl: './fund-add.component.html',
  styleUrls: ['./fund-add.component.scss']
})
export class FundAddComponent {

  @Output() add = new EventEmitter<number>();
  formId = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),]);

  getErrorMessage() {
    if (this.formId.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.formId.hasError('pattern')) {
      return 'You must enter a number';
    }
    return ;
  }

  sendId() {
    if (this.formId.valid) {
      const id: number = Number(this.formId.getRawValue());
      this.add.emit(id);
    }
  }
}
