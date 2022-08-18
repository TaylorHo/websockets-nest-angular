import { Component, Input, OnInit } from '@angular/core';
import { EquipmentInterface } from 'src/app/models/communication';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent implements OnInit {

  @Input() public equipment?: EquipmentInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
