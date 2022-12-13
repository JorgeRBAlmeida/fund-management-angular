import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  title: string;
  mensage: string;
}

@Component({
  selector: 'fm-dialog',
  template: `
    <div class="inline">
      <h1 mat-dialog-title>{{ data.title }}</h1>
      <p mat-dialog-content>{{ data.mensage }}</p>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false" (click)="closeDialog()">No</button>
        <div class="spacer">&nbsp;</div>
        <button mat-button [mat-dialog-close]="true" color="warn">Yes</button>
      </div>
    </div>
  `,
  styles: [`
  .inline {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20rem
  }
  .spacer {
    display: inline-block;
    margin: 1rem
  }
  `]
})
export class DialogComponent {

  constructor(public dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    closeDialog() {
      this.dialog.close();
    }
}
