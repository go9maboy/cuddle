export class AgeGroupDiseaseModel {

  public ageGroupDiseases!: AgeGroupDiseaseModel_AgeDiseaseModel[];
}

export class AgeGroupDiseaseModel_AgeDiseaseModel {
  public age!: string;
  public diseases!: AgeGroupDiseaseModel_DiseaseModel[];
}

export class AgeGroupDiseaseModel_DiseaseModel {
  public title!: string;
  public count!: number;
}
