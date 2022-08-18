export interface EquipmentInterface {
  id: string;
  usage: UsageInterface;
}

export interface UsageInterface {
  cpu: number;
  disk: number;
  ram: number;
  internet: number;
}