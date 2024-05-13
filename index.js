#! /usr/bin/env node
"use strict";
//Student Grade Calculator
//We are adding Chalk to add style/Color in our Calculator
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log("Marksheet by Sakina!!");
//Student Details
const StudentDetails = await inquirer_1.default.prompt([
    {
        message: (chalk_1.default.bold.underline.blue("School Name")),
        type: "string",
        name: "SchoolName"
    },
    { message: (chalk_1.default.bold.blue("Class Number")),
        type: "string",
        name: "Class" },
    { message: (chalk_1.default.blue.bold("Student Name")),
        type: "string",
        name: "Student" },
    { message: (chalk_1.default.blue.bold("Roll Number")),
        type: "number",
        name: "RollNum" }
]);
console.log("");
//Marks Obtained by students in his subjects
const MarksObtainedInSubjects = await inquirer_1.default.prompt([
    {
        message: (chalk_1.default.italic.bold.green("English Marks")),
        type: "number",
        name: "EnglishMarks"
    },
    { message: (chalk_1.default.italic.bold.green("Urdu Marks")),
        type: "number",
        name: "UrduMarks" },
    { message: (chalk_1.default.italic.bold.green("Maths Marks")),
        type: "number",
        name: "MathMarks" },
    { message: (chalk_1.default.italic.bold.green("Islamiat Marks")),
        type: "number",
        name: "IslamiatMarks" },
    { message: (chalk_1.default.italic.bold.green("Science Marks")),
        type: "number",
        name: "ScienceMarks" },
    { message: (chalk_1.default.italic.bold.green("SST Marks")),
        type: "number",
        name: "SSTMarks" },
    { message: (chalk_1.default.italic.bold.green("Drawing Marks")),
        type: "number",
        name: "DrawingMarks" }
]);
console.log("");
//Calculating Total Marks Obtained in his Subjets
let SumToMarksInSubjects = MarksObtainedInSubjects.EnglishMarks +
    MarksObtainedInSubjects.UrduMarks +
    MarksObtainedInSubjects.MathMarks +
    MarksObtainedInSubjects.IslamiatMarks +
    MarksObtainedInSubjects.ScienceMarks +
    MarksObtainedInSubjects.SSTMarks +
    MarksObtainedInSubjects.DrawingMarks;
//Now we are Calculating Student Marks & Percentage
let TotalMarks = 700;
let ObtainedMarks = SumToMarksInSubjects;
let Percentage = (ObtainedMarks / TotalMarks) * 100;
console.log("");
//Here we are printing Total Marks, Obtained Marks & his Percntage
console.log(chalk_1.default.underline.bold.blue("Total Marks:"), TotalMarks);
console.log(chalk_1.default.underline.bold.cyan("Obtained Marks:"), ObtainedMarks);
console.log(chalk_1.default.underline.bold.blue("Percentage:"), Percentage.toFixed(2) + "%");
console.log("");
//Now calculate Student Grade according to his Percentage
switch (true) {
    case Percentage >= 80:
        console.log(chalk_1.default.bgBlue.bold("Grade A+"));
        break;
    case Percentage >= 70:
        console.log(chalk_1.default.bgBlue.bold("Grade A"));
        break;
    case Percentage >= 60:
        console.log(chalk_1.default.bgGreen.bold("Grade B"));
        break;
    case Percentage >= 50:
        console.log(chalk_1.default.bgYellow.bold("Grade C"));
        break;
    case Percentage >= 40:
        console.log(chalk_1.default.bgMagenta.bold("Grade D"));
        break;
    default:
        console.log(chalk_1.default.bgRed.bold("Failed"));
        break;
}
//It can also be done by If Else Case
// if (Percentage >= 80) {console.log(chalk.bgBlue.bold("Grade: A"));
//}
//else if (Percentage >= 70) {console.log(chalk.bgBlue.bold("Grade: A"));
//}
// else if (Percentage >= 60) {console.log(chalk.bgGreen.bold("Grade: B"));
//}
//else if (Percentage >= 50) {console.log(chalk.bgYellow.bold("Grade: C"));
//}
//else if (Percentage >= 40) {console.log(chalk.bgMagenta.bold("Grade: D"));
//}
//else {console.log(chalk.bgRed.bold("Failed"));
//}
