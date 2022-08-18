import { Component, Input, OnInit } from '@angular/core';
import { EquipmentInterface } from 'src/app/models/communication';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  @Input() public equipment?: EquipmentInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
