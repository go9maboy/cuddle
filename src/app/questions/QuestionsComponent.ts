import { Component, OnInit } from '@angular/core';
import { SurveyAnswerTypes } from '../models/SurveyAnswerTypesEnum';
import { ModelBindingServices } from '../services/ModelBindingServices';
import { AgeGroupTypes } from './AgeGroupTypesEnum';
import { EthnicityTypes } from './EthnicityTypesEnum';
import { GenderTypes } from './GenderTypeEnum';
import { QuestionsComponentViewModel, QuestionsComponentViewModel_DiseaseModel } from './QuestionsComponentViewModel';

@Component({
  selector: 'questions-component',
  templateUrl: './QuestionsComponent.html',
  styleUrls: ['../AppComponent.css']
})
export class QuestionsComponent implements OnInit {
  public AgeGroupTypes = AgeGroupTypes;
  public GenderGroupTypes = GenderTypes;
  public EthnicityTypes = EthnicityTypes;
  public SurveyAnswerTypes = SurveyAnswerTypes;
  public viewModel: QuestionsComponentViewModel;
  public modelBindingService: ModelBindingServices;

  constructor(modelBindingService: ModelBindingServices) {
    this.modelBindingService = modelBindingService;
    this.viewModel = new QuestionsComponentViewModel();

    this.viewModel.surveyQuestions!.push({ question: "Little interest or pleasure in doing things", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Feeling down, depressed, or hopeless", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Trouble falling or staying asleep, or sleeping too much", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Feeling tired or having little energy", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Poor appetite or overeating", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Trouble concentrating on things, such as reading the newspaper or watching television", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "Thoughts that you would be better off dead or of hurting yourself in some way", answer: SurveyAnswerTypes.NotAtAll });
    this.viewModel.surveyQuestions!.push({ question: "How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", answer: SurveyAnswerTypes.NotAtAll });
  }

  ngOnInit(): void {

  }

  public estimateSurvey() {
    let totalScore = 0;
    this.viewModel.surveyQuestions?.forEach(q => totalScore += q.answer);
    this.viewModel.surveyTotalScore = totalScore;
  }

  public ageGroupTypeChanged() {
    this.calculateProbability();
  }

  public ethnicityTypeChanged() {
    const ethnicityGroupDiseases = this.modelBindingService.getEthnicityGroupDiseases();
    const ethnicityPopulations = this.modelBindingService.getEthnicityGroupPopulation();

    const selectedEthnicity = ethnicityGroupDiseases.ethnicGroups.find(e => e.ethnic.title == this.viewModel.ethnicityType!);
    const selectedEthinicityGender = selectedEthnicity?.ethnic.genders.find(g => g.title == this.viewModel.genderType);
    const ethnicityAgeGroup = selectedEthinicityGender?.ageGroups.find(a => a.age == this.viewModel.ageGroupType);

    this.viewModel.totalEthnicityPopulation = ethnicityPopulations.ethnicityGroupPopulations.find(e => e.ethnicity == this.viewModel.ethnicityType)?.count!;
    this.viewModel.ethniciityAgeAndGenderPopulation = ethnicityAgeGroup?.count!
  }

  public genderButtonClicked(genderType: GenderTypes) {
    this.viewModel.genderType = genderType;
    this.calculateProbability();
  }

  private calculateProbability(): number {
    //P(D|20,M) = [P(20|D)*P(M|D)]/[P(20)*P(M)/P(D)^2]
    //P(D|20) = [P(20|D)]/[P(20)/P(D)]

    const ageGroupPopulation = this.modelBindingService.getAgeGroupPopulation();
    const ageGroupDiseases = this.modelBindingService.getAgeGroupDiseases();
    const ageGroupDiseaseTotalCounts = this.modelBindingService.getAgeGroupDiseaseTotalCounts();
    const genderGroupDiseases = this.modelBindingService.getGenderGroupDiseases();
    const genderGroupPopulation = this.modelBindingService.getGenderGroupPopulation();
    let totalCount = 0;

    let diseasesTotal: QuestionsComponentViewModel_DiseaseModel[] = [];
    let selectedAgeGroup = ageGroupDiseases.ageGroupDiseases.find(d => d.age == this.viewModel.ageGroupType);
    let pDisease = 0;

    ageGroupDiseaseTotalCounts.diseases.forEach(agdt => pDisease += agdt.count);



    selectedAgeGroup?.diseases.forEach(d => {
      const ageTotalCount = ageGroupDiseaseTotalCounts.diseases.find(td => td.title == d.title);
      const pAgeDisease = d.count / ageTotalCount?.count! * 100;
      const pAge = ageGroupPopulation.ageGroupPopulations.find(ag => ag.Age_Group == this.viewModel.ageGroupType)?.Count!;
      const hasGender = this.viewModel.genderType != undefined;

      let pGenderDisease = 1;
      let pGender = 1;

      if (hasGender) {
        let genderDiseaseTotal = 0;
        let selectedGender = genderGroupDiseases.genderDiseases.find(gd => gd.gender == this.viewModel.genderType);
        let selectedGenderDiseaseCount = selectedGender?.diseases.find(sgd => sgd.title == d.title)?.count!;

        genderGroupDiseases.genderDiseases.forEach(gd => genderDiseaseTotal += gd.diseases.find(gdd => gdd.title == d.title)?.count!);
        pGenderDisease = selectedGenderDiseaseCount / genderDiseaseTotal * 100;
        pGender = genderGroupPopulation.genderPopulations.find(gp => gp.gender == this.viewModel.genderType)?.count!;
      }
      diseasesTotal.push({
        title: d.title,
        probability: (pAgeDisease * pGenderDisease) / ((pAge * pGender) / (hasGender ? Math.pow(pDisease, 2) : pDisease))
      });
    });

    this.viewModel.topDiseases = diseasesTotal.sort((a, b) => b.probability - a.probability);

    return totalCount;
  }
}
