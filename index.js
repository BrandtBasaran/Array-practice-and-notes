const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finanace", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//old school vs forEach

  // for(let i = 0; i < companies.length; i++) {
  //  console.log(companies[i]);
  // };

  //companies.forEach(function(company) {
    //console.log(company.name);
  //});


//old school vs filter

  //Get overage people*****

      // let canDrink = [];
      //   for(let i = 0; i < ages.length; i++ ) {
      //     if(ages[i] >= 21) {
      //     canDrink.push(ages[i]);
      //   }
      // };

      // const canDrink = ages.filter(function(age) {
      //   if(age >= 21) {
      //     return true;
      //   }
      // });

      // const canDrink = ages.filter(age => age >= 21);

      // console.log(canDrink);

  //Filter retail companies***
  
      // const retailCompanies = companies.filter(company => company.category === 'Retail');

      // console.log(retailCompanies);

  //Get 80's Companies***

      // const eightiesCompanies = companies.filter(company => (company.start >= 1980 &&     company.start <= 1990));

      // console.log(eightiesCompanies);

  //Get companies with > 10 year tenure***

    // const longCompanies = companies.filter(company => (company.end - company.start > 10));

    // console.log(longCompanies);


//map

  //Create array of company names

    // const testMap = companies.map(function(company) {
    //   return `${company.name}, [${company.start} - ${company.end}]`;
    // });

    // console.log(testMap);

    // const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

    // console.log(companyNames);

  
    // const ageMath = ages
    //   .map(age => Math.sqrt(age))
    //   .map(age => age * 2);

    // console.log(ageMath);

// STOPPED AT 21:00 of JavaScript Higher Order Functions & Arrays on YouTube
   





//sort
//reduce
