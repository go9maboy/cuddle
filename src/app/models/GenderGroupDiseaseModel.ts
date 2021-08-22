export class GenderGroupDiseaseModel {
  public genderDiseases!: GenderGroupDiseaseModel_GenderDiseaseModel[];
}

export class GenderGroupDiseaseModel_GenderDiseaseModel {
  public gender!: string;
  public diseases!: GenderGroupDiseaseModel_DiseaseModel[];
}

export class GenderGroupDiseaseModel_DiseaseModel {
  public title!: string;
  public count!: number;
}
