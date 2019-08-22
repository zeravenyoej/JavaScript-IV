// CODE here for your Lambda Classes


//PERSON
class Person {
    constructor (atts){
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//INSTRUCTOR 

class Instructor extends Person {
    constructor (atts) {
        super (atts);
        this.specialty = atts.specialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) { 
        return `${student} receives a perfect score on ${subject}`;
    }
}


// //TESTING TESTING TESTING TESTING TESTING TESTING TESTING
// const Brit = new Instructor ({
//     name: 'Brit',
//     age: 30, 
//     location: 'Canada',
//     specialty: 'CSS',
//     favLanguage: 'English',
//     catchPhrase: 'Did I do that?',
// })

// console.log(Brit);
// console.log(Brit.demo('JavaScript'));


//STUDENT
class Student extends Person {
    constructor (atts) {
        super (atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className; 
        this.favSubjects = atts.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}.`;
    }
}

//TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING 
// const Joey = new Student ({
//     name: 'Joey',
//     age: 31,
//     location: 'Sacramento',
//     previousBackground: 'none',
//     className: 'WebDev23',
//     favSubjects: [
//         'JavaScript', 
//         'CSS', 
//         'HTML',
//     ],
// })

// console.log(Joey);
// console.log(Joey.listsSubjects());
// console.log(Joey.PRAssignment('JavaScript'));
// console.log(Joey.sprintChallenge('React'));



// #### Project Manager

class ProjectManager extends Instructor {
    constructor (atts){
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel study times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}


// const Reed = new ProjectManager ({
//     name: 'Reed', 
//     age: 33, 
//     location: 'Texas',
//     previousBackground: 'tech', 
//     className: 'WebDev',
//     favSubjects: ['backend', 'baseball']
// })

// console.log(Reed);
// console.log(Reed.grade('Joey', 'JavaScript'));
// console.log(Reed.speak());
// console.log(Reed.standUp('memes'));
// console.log(Reed.debugsCode('Joey', 'JavaScript'));