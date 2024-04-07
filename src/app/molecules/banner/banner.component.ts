import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  @Input() img = '';
  @Input() description = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() labelButton = '';
  @Output() action = new EventEmitter();

  ngOnInit(): void {
    this.img = this.img ? `assets/images/${this.img}`:'assets/images/banner.png';
  }


  public onAction(event:any){
    this.action.emit(event);
  }



}
