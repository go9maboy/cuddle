import { Injectable } from "@angular/core";
import { AgeGroupDiseaseModel, AgeGroupDiseaseModel_DiseaseModel } from "../models/AgeGroupDiseaseModel";

import AgeGroupData from "../../data/MHA_Age_Group_table.json";
import AgeGroupPopulationData from "../../data/Age_Population_list.json";
import GenderPopulationData from "../../data/Gender_Population_list.json";
import GenderGroupDiseasesData from "../../data/MHA_Gender_table.json";
import EthnicityGroupPopulationData from "../../data/Ethnicity_Population_list.json";
import EthnicityGroupDiseasesData from "../../data/MHA_Ethnicity_table.json";
import DiseaseTotalCountsData from "../../data/MHA_Age_Total_list.json";
import { AgeGroupPopulationsModel } from "../models/AgeGroupPopulationModel";
import { GenderPopulationModel } from "../models/GenderPopulationModel";
import { GenderGroupDiseaseModel } from "../models/GenderGroupDiseaseModel";
import { EthnicityGroupPopulationsModel } from "../models/EthnicityGroupPopulationsModel";
import { EthnicityGroupDiseasesModel } from "../models/EthnicityGroupDiseasesModel";
import { DiseaseTotalCountsModel } from "../models/DiseaseTotalCountsModel";

@Injectable()
export class ModelBindingServices {
  constructor() {

  }

  public getAgeGroupDiseases(): AgeGroupDiseaseModel {
    const data: AgeGroupDiseaseModel = AgeGroupData;

    return data;
  }

  public getAgeGroupPopulation(): AgeGroupPopulationsModel {
    const data: AgeGroupPopulationsModel = AgeGroupPopulationData;

    return data;
  }

  public getGenderGroupPopulation(): GenderPopulationModel {
    const data: GenderPopulationModel = GenderPopulationData;

    return data;
  }

  public getGenderGroupDiseases(): GenderGroupDiseaseModel {
    const data: GenderGroupDiseaseModel = GenderGroupDiseasesData;

    return data;
  }

  public getEthnicityGroupPopulation(): EthnicityGroupPopulationsModel {
    const data: EthnicityGroupPopulationsModel = EthnicityGroupPopulationData;

    return data;
  }

  public getEthnicityGroupDiseases(): EthnicityGroupDiseasesModel {
    const data: EthnicityGroupDiseasesModel = EthnicityGroupDiseasesData;

    return data;
  }

  public getAgeGroupDiseaseTotalCounts(): DiseaseTotalCountsModel {
    const data: DiseaseTotalCountsModel = DiseaseTotalCountsData;

    return data;

  }
}
