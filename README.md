# GovHack by Team LockDown

<img src="logo1.png" alt="My cool logo"/>

### Simple, Easy, and Friendly Support System That Reaching Out To You First

<img src="Cuddle Screen Shot2.png" alt="AppScreenshot"/>

Cuddle is a mental health service that is designed to guide our citizens to find the right service quickly and easily.

The current Support System expects people to know their current mental status and expect to search for the right service themself. This can be a very daunting task for those who are not feeling 100% mentally.

In contrast, the Cuddle first estimates 5 most commonly occurring mental diseases based on the user's age, gender, and ethnicity. It displays the percentage of people in your group who are also suffering from similar diseases. This helps users to open up their feelings and emotion and encourage them to step out and try to get help. Knowing you are not alone could help users to increase their awareness and reducing their shamefulness. Based on the estimate, Cuddle recommends a simple customized survey to diagnose the disease better. Then, it finally provides the right support service to the patient.

Try our demo [here](https://noahsong.github.io/cuddle/)

## Motivation

In New Zealand, one in five people experiences depression at some stage in their life. One of my family members suffered severe depression. It is extremely common to feel depressed. Yet, it is often very hard to realize your current condition yourself. Even if you realize something is not right about your mental health, it is hard to get help due to lack of motivation, embarrassment, misunderstanding, and fear of the cost of treatment. We envision that we can help more people by predicting their potential mental diseases and show you are not the only one suffering from these. Then, we direct you to all freely available support or government-subsidized services that can help you to get over this mental disease and live your life again.

## Background

Cuddle makes a statistical prediction based on a previously collected health dataset.
The research shows there is a strong dependency between mental disease and a person's age, gender, ethnicity, and etc.

We use two datasets for this project.
One is about Mental Health statistics. Another is about NZ age, gender, and ethnicity population from Census.
Mental Health provide us with the probability of age group given the disease.
We have rearranged it to get probability of getting disease given the age group using Bayes' theorem and probability of age group from Census dataset.

### Used Dataset

- 2018 Census population and dwelling counts:
  Used to obtain age group distribution, gender group distribution, and ethnic group distribution in NZ. Used those and health datasets to calculate the probability of suffering from mental diseases given age, gender, and ethnicity.
  [link](https://www.stats.govt.nz/information-releases/2018-census-population-and-dwelling-counts)

- Mental Health and Addiction 2018 - 2019:
  Used to extract the conditional probabilities of suffering from 17 listed mental disorders based on age, gender, and ethnicity.
  [link](https://www.health.govt.nz/publication/mental-health-and-addiction-service-use-2018-19-tables)

## Challenges

1. Mining from a vast dataset and reformating the necessary data from NZ Health organizations and NZ Census
2. Extracting the meanings out by manipulating and combining multiple datasets.
3. Use statistical techniques for predicting the likelihood of the disease.
4. Designing and implementing a simple and easy interface for the user.
5. Effectively displaying information to the users and encourage them to take the next diagnosis survey.

## Future works

Due to limited access and availability of a public database, we could not extend our prediction beyond age, gender, and ethnicity.
It could be interesting to include income, residential region, job status/type, and etc., into mental disease estimation.

## Source Code

You can find all our source code [here](https://github.com/NoahSong/cuddle.git)

## Team Members

We are a team **LockDown**.  
_"In lockdown level 4, a good Cuddle is all we need."_

Our members are,  
[Jun Junghyun](https://www.linkedin.com/in/junjunghyun),  
[Ahn Joo-Hyun](https://www.linkedin.com/in/joo-hyun-ahn),  
and [Changeun Noah Song](https://www.linkedin.com/in/noahsong/)

## References

We got lots of information from following links and publications

[Health Navigator NZ](https://www.healthnavigator.org.nz/support/m/mental-health/),
[Ministry of Health NZ](https://www.health.govt.nz/your-health/services-and-support/health-care-services/mental-health-services/mental-health-services-where-get-help),
[Aunty Dee](https://www.auntydee.co.nz/tips-and-help),
[Mental Health and Addiction](https://mentalhealth.inquiry.govt.nz/inquiry-report/he-ara-oranga/chapter-3-what-we-think/3-2-our-conclusions/),
[New Zealand Government Health](https://www.govt.nz/browse/health/help-with-mental-health-and-addiction/),
[Mental Health Foundation](https://mentalhealth.org.nz/helplines),
[HHS.Gov](https://www.hhs.gov/hipaa/for-professionals/faq/mental-health/index.html),
[Safety Culture](https://blog.safetyculture.com/industry-trends/the-striking-role-mental-health-plays-in-construction),
[Small Steps](https://depression.org.nz/is-it-depression-anxiety/self-test/anxiety-test/#),
[Article by Carol HJ Lee](https://global-uploads.webflow.com/5e332a62c703f653182faf47/5e332a62c703f6bc512fcf9f_Lee%20FINAL.pdf),
[New Zealand Medical Journal](https://www.nzma.org.nz/journal-articles/ethnic-inequality-in-diagnosis-with-depression-and-anxiety-disorders),
[NZ Govt Report](https://mentalhealth.inquiry.govt.nz/inquiry-report/he-ara-oranga/chapter-3-what-we-think/3-2-our-conclusions/),
[Media Release](https://coronialservices.justice.govt.nz/assets/Documents/Publications/Chief-Coroner-Suicide-Stats-2020-Media-Release.pdf),
[NZ Govt Report-Suicide](https://www.health.govt.nz/system/files/documents/publications/suicide_data_related_to_mental_health_service_users_2016_-final.pdf),
[Journal of Mental Health](https://www.fmhs.auckland.ac.nz/assets/fmhs/som/psychmed/petrie/docs/2008%20J%20mental%20health%20.pdf)
