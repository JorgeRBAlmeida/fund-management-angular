import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  positions: number[] = [];
  dialogRef?: MatDialogRef<any>;

  constructor(public matDialog: MatDialog) { }

  showWarningMsg(title: string, mensage: string) {
    const dialog = this.matDialog.open(DialogComponent, {
      width: 'fit-content',
      data: { title, mensage },
      position: {top: '7rem'},
    });

    dialog.afterClosed().subscribe(res => {
      return res;
    })
  }
}
