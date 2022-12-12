import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Fund } from 'src/app/core/models/fund.model';

import { FundsService } from '../../core/services/funds.service';
import { DialogService } from '../../core/utils/dialog.service';
import { DialogComponent } from '../../core/utils/dialog/dialog.component';


@Component({
  selector: 'fm-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  vm$ = this.fundsService.state$;
  funds$ = this.fundsService.loadFunds();
  dialogRef?: MatDialogRef<any>;

  constructor(
    private fundsService: FundsService,
    private router: Router,
    private route: ActivatedRoute,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.vm$.subscribe(console.log);
  }

  enterFundDetail(id: number): void {
    this.fundsService.getFundById(id).subscribe(res => {
      console.log(res);
    });
    this.router.navigate(['fund', id], { relativeTo: this.route })
  }

  removeFund(id: number): void {
    const title = 'Remove Fund';
    const mensage = 'Do you confirm you want to remove this fund from your management?';
    const dialog = this.matDialog.open(DialogComponent, {
      width: 'fit-content',
      data: { title, mensage },
      position: {top: '7rem'},
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.fundsService.removeFundFromList(id);
        this.fundsService.loadFunds();
      }
    })
  }

  addFund(id: number): void {
    this.fundsService.addFund(id);
    this.fundsService.loadFunds();
  }

  trackById(index: number, item: Fund) {
    return item.id;
  }
}
