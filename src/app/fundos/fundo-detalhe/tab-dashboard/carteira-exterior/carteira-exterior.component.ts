import { FundosService } from './../../../fundos.service';
import { Fundo } from './../../../../shared/model/fundo.model';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-carteira-exterior-card',
  templateUrl: './carteira-exterior.component.html',
  styleUrls: ['./carteira-exterior.component.scss']
})
export class CarteiraExteriorComponent implements OnInit {
  displayedColumns: string[] = ['ativos', 'valorMercado', 'quantidade', 'puMercado', 'plAtual', 'plIdeal', 'limite', 'necessidade', 'select'];
  dataSource = new MatTableDataSource<Fundo>();
  selection = new SelectionModel<Fundo>(true, []);

  constructor(private fundosService: FundosService) { }

  ngOnInit(): void {
    this.dataSource.data = this.fundosService.getFundos();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Fundo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.codigoDrive + 1}`;
  }
}
