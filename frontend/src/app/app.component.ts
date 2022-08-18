import { Component, OnInit } from '@angular/core';
import { EquipmentInterface, UsageInterface } from './models/communication';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public equipmentsList: EquipmentInterface[] = [];
  public thisEquipment?: EquipmentInterface;
  private timer: any;

  constructor(
    private communicationService: CommunicationService,
  ) { }

  ngOnInit(): void {

    this.communicationService.receiveData().subscribe((data: EquipmentInterface) => {

      let valueAdded: boolean = false;
      let newData = this.equipmentsList.map((equipment: EquipmentInterface) => {
        if (equipment.id == data.id) {
          valueAdded = true;
          return {
            id: equipment.id,
            usage: data.usage,
          }
        } else {
          return equipment;
        }
      });

      if (!valueAdded) {
        newData.push(data);
      }

      this.equipmentsList = newData;

    });

    this.updateEquipment(); // create initial usage attributes
    this.timer = setInterval(() => {
      this.updateEquipment();
    }, 4 * 1000); // update usage attributes every 4 seconds

  }

  // cancel the timer/interval function
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }


  public updateEquipment() {
    this.thisEquipment = {
      id: this.thisEquipment ? this.thisEquipment.id : this.generateUID(),
      usage: this.getNewEquipmentUsage(),
    }

    this.communicationService.sendData(this.thisEquipment);
  }

  // return usage values updated
  private getNewEquipmentUsage(): UsageInterface {
    let usage;

    if (this.thisEquipment) {
      let currentUsage = this.thisEquipment.usage;

      usage = {
        cpu: this.randomNumberUpdate(currentUsage.cpu),
        ram: this.randomNumberUpdate(currentUsage.ram),
        disk: this.randomNumberUpdate(currentUsage.disk),
        internet: this.randomNumberUpdate(currentUsage.internet),
      }

    } else {
      usage = {
        cpu: this.randomNumberUpdate(30),
        ram: this.randomNumberUpdate(30),
        disk: this.randomNumberUpdate(30),
        internet: this.randomNumberUpdate(30),
      }
    }

    return usage;
  }

  // Get a random number, not so distant from the original one
  private randomNumberUpdate(value: number): number {
    let min = (value - 10) < 0 ? 0 : value - 10; // 0 or more
    let max = (value + 10) > 100 ? 100 : (value + 10); // 100 or less

    // a random number between the min and max specified
    let random = Math.floor(Math.random() * (max - min)) + min;

    return random;
  }

  private generateUID(): string {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    let randomUID = ("000" + ((Math.random() * 46656) | 0).toString(36)).slice(-3);
    return randomUID;
  }

}
