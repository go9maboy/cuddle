import { SurveyModel } from "../models/SurveyModel";
import { AgeGroupTypes } from "./AgeGroupTypesEnum";
import { EthnicityTypes } from "./EthnicityTypesEnum";
import { GenderTypes } from "./GenderTypeEnum";

export class QuestionsComponentViewModel {
  public ageGroupType?: AgeGroupTypes;
  public genderType?: GenderTypes;
  public ethnicityType?: EthnicityTypes;
  public topDiseases!: QuestionsComponentViewModel_DiseaseModel[];
  public totalEthnicityPopulation!: number;
  public ethniciityAgeAndGenderPopulation!: number;
  public surveyQuestions?: SurveyModel[] = [];
  public surveyTotalScore: number = 0;
  public selectedSurveyType!: string;
}

export class QuestionsComponentViewModel_DiseaseModel {
  public title!: string;
  public probability!: number;
}
