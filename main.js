/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(a) {
  return a > 5;
}

function topScore(b, c) {
  return b > c;
}

function isInDanger(d) {
  return 71 >= d && d >= 60;
}

function isCoasting(e) {
  return 83 >= e && e >= 72;
}

function isSucceeding(e) {
  return 92 >= e && e >= 84;
}


function isFailing(f) {
  return f < 60;
}

function isAcing(g) {
  return g > 92;
}

function isStudent(pupil) {
  return pupil === "student";  
}

function isTeacher(listenBoy) {
  return listenBoy === "teacher";  
}

function isAdmin(boss) {
  return boss === "admin";  
}

function isElementary(grade) {
  return grade === "elementary";
}

function areDifferentPeople(name1, name2) {
  return name1 !== name2;
}

function isMiddleSchoolTeacher(title, grade) {
  return title === "teacher" && grade <= 8 && grade >= 6;
}

function notAnElementarySchoolAdministrator(level, role) {
  return level !== "elementary" || role !== "admin";
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
