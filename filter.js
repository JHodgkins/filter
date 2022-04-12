  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
const ageCheck = people.filter(person => person.age >= 18);
console.log(ageCheck);
const paul = people.filter(person => person.name === 'Paul');
console.log(paul); // logs out array with object inside
console.log(paul[0]); // log the onject itself
console.log(paul[0].name) // log out information


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
// one way
const candidates = students.filter(student => {
  let yearsExperanc = student.skills.filter(skills => {
    return skills.yrsExperience === 5;
  });
  return yearsExperanc.length > 0;
})
console.log('one way', candidates);

// seperate functon
const hasStrongSkills = students => {
  let strongSkills = students.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
};
const candidatesWhoCanApply = students.filter(hasStrongSkills);
console.log('seperate function', candidatesWhoCanApply);

// refactor
const has5YrsExperiance = skill => skill.yrsExperience >= 5;
const hasStrongSkillsV2 = student => student.skills.filter(has5YrsExperiance).length > 0;

const candidatesWhoCanApplyV2 = students.filter(hasStrongSkillsV2);
console.log('refactor way:', candidatesWhoCanApplyV2);

const names = candidatesWhoCanApplyV2.map(student => student.name);
console.log('Who is eligable to apply:', names);