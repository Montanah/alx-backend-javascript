/// <reference path="Cpp.ts" />
/// <reference path="Java.ts" />
/// <reference path="React.ts" />

import './Cpp';
import './Java';
import './React';

// Create subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create a Teacher object
const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
  };

// Set teacher for subjects
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Output results
console.log('Cpp Subject:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java Subject:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React Subject:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
