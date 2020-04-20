// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
Cypress.Commands.add('demoAdminLogin', () => {
    cy.visit('/')
    cy.get('[data-cy="adminButton"]').click()
    cy.contains('Administration').click()
    cy.contains('Manage Courses').click()
})

Cypress.Commands.add('createCourseExecution', (name, acronym, academicTerm) => {
    cy.get('[data-cy="createButton"]').click()
    cy.get('[data-cy="Name"]').type(name)
    cy.get('[data-cy="Acronym"]').type(acronym)
    cy.get('[data-cy="AcademicTerm"]').type(academicTerm)
    cy.get('[data-cy="saveButton"]').click()
})

Cypress.Commands.add('closeErrorMessage', (name, acronym, academicTerm) => {
    cy.contains('Error')
        .parent()
        .find('button')
        .click()
})

Cypress.Commands.add('deleteCourseExecution', (acronym) => {
    cy.contains(acronym)
        .parent()
        .should('have.length', 1)
        .children()
        .should('have.length', 7)
        .find('[data-cy="deleteCourse"]')
        .click()
})

Cypress.Commands.add('createFromCourseExecution', (name, acronym, academicTerm) => {
    cy.contains(name)
        .parent()
        .should('have.length', 1)
        .children()
        .should('have.length', 7)
        .find('[data-cy="createFromCourse"]')
        .click()
    cy.get('[data-cy="Acronym"]').type(acronym)
    cy.get('[data-cy="AcademicTerm"]').type(academicTerm)
    cy.get('[data-cy="saveButton"]').click()
})

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* Post Cypress Commands
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

Cypress.Commands.add('demoStudentLoginPosts', () => {
    cy.visit('/');
    cy.get('[data-cy="studentButton"]').click();
    cy.get('[data-cy="Student"]').click();
});

Cypress.Commands.add('demoTeacherLoginPosts', () => {
    cy.visit('/');
    cy.get('[data-cy="teacherButton"]').click();
    cy.contains('Management').click();
});

Cypress.Commands.add('gotoPosts', () => {
    cy.contains('Posts').click();
});

Cypress.Commands.add('gotoSubmitPost', () => {
    cy.contains('Submit Post').click();
});

Cypress.Commands.add('gotoPosts', () => {
    cy.contains('Posts').click();
});

Cypress.Commands.add('submitPost', (question, studentQuestion) => {
    cy.get('[data-cy="pickQ"]').type(question.concat('{downarrow}{enter}'));
    cy.get('[data-cy="typeQ"]').type(studentQuestion);
    cy.get('[data-cy="submitButton"]').click();
});

Cypress.Commands.add('deletePost', (studentQuestion) => {
    cy.contains(studentQuestion)
        .parent()
        .should('have.length', 1)
        .parent()
        .should('have.length', 1)
        .find('[data-cy="deleteButton"]')
        .click({force: true});
});

Cypress.Commands.add('answerPost', (studentQuestion, teacherAnswer) => {
    cy.contains(studentQuestion)
      .parent()
      .should('have.length', 1)
      .parent()
      .should('have.length', 1)
      .find('[data-cy="showButton"]')
      .click({force: true})
      .get('[data-cy="answerPostButton"]')
      .click({force: true})
      .get('[data-cy="typeAnswer"]')
      .type(teacherAnswer.concat('{enter}{esc}'));
});

Cypress.Commands.add('viewPost', (studentQuestion) => {
    cy.contains(studentQuestion)
      .parent()
      .should('have.length', 1)
      .parent()
      .should('have.length', 1)
      .find('[data-cy="showButton"]')
      .click({force: true});
});

Cypress.Commands.add('comment', (type, comment) => {
      cy.get('[data-cy="'.concat(type).concat('Button"]'))
        .click({force: true})
        .get('[data-cy="'.concat(type).concat('Box"]'))
        .click({force: true})
        .type(comment.concat('{enter}{esc}'));
});

Cypress.Commands.add('editPost', (studentQuestion, newQuestion) => {
    cy.contains(studentQuestion)
      .parent()
      .should('have.length', 1)
      .parent()
      .should('have.length', 1)
      .find('[data-cy="editButton"]')
      .click({force: true})
      .get('[data-cy="dialogEditPost"]')
      .type('{selectall}{backspace}'.concat(newQuestion))
      .get('[data-cy="saveEditButton"]')
      .click({force: true});
});

Cypress.Commands.add('editAnswer', (studentQuestion, newAnswer) => {
    cy.contains(studentQuestion)
      .parent()
      .should('have.length', 1)
      .parent()
      .should('have.length', 1)
      .find('[data-cy="editAnswerButton"]')
      .click({force: true})
      .get('[data-cy="editAnswerBox"]')
      .type('{selectall}{backspace}'.concat(newAnswer).concat('{enter}'));
});

Cypress.Commands.add('pressStatusButton', (studentQuestion, button) => {
    cy.contains(studentQuestion)
      .parent()
      .should('have.length', 1)
      .parent()
      .should('have.length', 1)
      .find('[data-cy=StatusButtons]')
      .find('[data-cy="'.concat(button).concat('"]'))
      .click({force: true});
});


