import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Output() viewNumberChanged = new EventEmitter<number>();
  activePage = 0


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    // console.log(this.viewNumber)
  }

  ngOnInit(): void {
  }

  changeViewNumber(num: number){
    this.viewNumberChanged.emit(num);
    this.activePage = num
  }

}
