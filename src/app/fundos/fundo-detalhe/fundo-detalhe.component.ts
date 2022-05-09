import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fundo-detalhe',
  templateUrl: './fundo-detalhe.component.html',
  styleUrls: ['./fundo-detalhe.component.scss']
})
export class FundoDetalheComponent implements AfterViewInit {
  sticky: boolean = false;
  menuPosition!: number;

  @ViewChild('stickyMenu') menuElement?: ElementRef;

  ngAfterViewInit(): void {
    this.menuPosition = this.menuElement?.nativeElement.offsetTop + 64
    console.log(this.menuPosition);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


}
