import { AgeGroupTypes } from "../questions/AgeGroupTypesEnum";

export class EthnicityGroupDiseasesModel {
  public ethnicGroups!: EthnicityGroupDiseasesModel_EthnicityGroupModel[];
}

export class EthnicityGroupDiseasesModel_EthnicityGroupModel {
  public ethnic!: EthnicityGroupDiseasesModel_EthnicityModel;
}

export class EthnicityGroupDiseasesModel_EthnicityModel {
  public title!: string;
  public genders!: EthnicityGroupDiseasesModel_EthnicityModel_GenderModel[];
}

export class EthnicityGroupDiseasesModel_EthnicityModel_GenderModel {
  public title!: string;
  public ageGroups!: EthnicityGroupDiseasesModel_EthnicityModel_GenderModel_AgeGroupModel[];
}

export class EthnicityGroupDiseasesModel_EthnicityModel_GenderModel_AgeGroupModel {
  public age!: string;
  public count!: number;
}
