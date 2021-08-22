export class GenderPopulationModel {
  public genderPopulations!: GenderPopulationModel_GenderModel[];
}

export class GenderPopulationModel_GenderModel {
  public gender!: string;
  public count!: number;
}
