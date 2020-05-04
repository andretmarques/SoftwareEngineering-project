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
  cy.visit('/');
  cy.get('[data-cy="adminButton"]').click();
  cy.contains('Administration').click();
  cy.contains('Manage Courses').click();
});

Cypress.Commands.add('createCourseExecution', (name, acronym, academicTerm) => {
  cy.get('[data-cy="createButton"]').click();
  cy.get('[data-cy="Name"]').type(name);
  cy.get('[data-cy="Acronym"]').type(acronym);
  cy.get('[data-cy="AcademicTerm"]').type(academicTerm);
  cy.get('[data-cy="saveButton"]').click();
});

Cypress.Commands.add('closeErrorMessage', (name, acronym, academicTerm) => {
  cy.contains('Error')
    .parent()
    .find('button')
    .click();
});

Cypress.Commands.add('deleteCourseExecution', acronym => {
  cy.contains(acronym)
    .parent()
    .should('have.length', 1)
    .children()
    .should('have.length', 7)
    .find('[data-cy="deleteCourse"]')
    .click();
});

Cypress.Commands.add(
  'createFromCourseExecution',
  (name, acronym, academicTerm) => {
    cy.contains(name)
      .parent()
      .should('have.length', 1)
      .children()
      .should('have.length', 7)
      .find('[data-cy="createFromCourse"]')
      .click();
    cy.get('[data-cy="Acronym"]').type(acronym);
    cy.get('[data-cy="AcademicTerm"]').type(academicTerm);
    cy.get('[data-cy="saveButton"]').click();
  }
);

Cypress.Commands.add('deleteTournament', title => {
  cy.contains(title)
    .find('#num')
    .then($span => {
      const id = parseInt($span.text());
      cy.request('GET', 'http://localhost:8080/auth/demo/student').then(
        resp => {
          if (resp.status === 200)
            cy.request({
              method: 'DELETE',
              url: 'http://localhost:8080/tournaments/' + id + '/delete',
              auth: { bearer: resp.body.token }
            });
        }
      );
    });
});

//##############################TOURNAMENTS FEATURE BEGIN##########################################

Cypress.Commands.add('justDemoAdminLogin', () => {
  cy.visit('/');
  cy.get('[data-cy="adminButton"]').click();
});

Cypress.Commands.add('demoStudentLogin', () => {
  cy.visit('/');
  cy.get('[data-cy="studentButton"]').click();
});

Cypress.Commands.add('createTournament', (tile, numbQuestions) => {
  let forwoardButtonAval = ':nth-child(3) > .v-btn__content > .v-icon';
  let forwoardButtonConc =
    '.v-dialog__content--active > .v-dialog > .v-sheet > .v-card__text > .v-tabs > .v-window > .v-window__container > .v-window-item > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-header > :nth-child(3) > .v-btn__content > .v-icon';

  cy.contains('Tournament').click();
  cy.contains('Create').click();
  cy.get('[data-cy="title"]').type(tile);
  cy.get('[data-cy="AssessmentTitle"]')
    .contains('Third mini-test')
    .click();
  cy.contains(numbQuestions).click();
  cy.get('.row > :nth-child(1) > .v-input').click();
  cy.get(forwoardButtonAval).click();
  cy.get(forwoardButtonAval).click();
  cy.get(forwoardButtonAval).click();
  cy.get(forwoardButtonAval).click();
  cy.get(
    '.tab-transition-enter-active > tbody > :nth-child(2) > :nth-child(1) > .v-btn'
  ).click();
  cy.get('.green--text').click();
  cy.get(':nth-child(3) > .v-input').click();
  cy.get(forwoardButtonConc).click();
  cy.get(forwoardButtonConc).click();
  cy.get(forwoardButtonConc).click();
  cy.get(forwoardButtonConc).click();
  cy.get(forwoardButtonConc).click();
  cy.get(
    '.tab-transition-enter-active > tbody > :nth-child(2) > :nth-child(1) > .v-btn'
  ).click();
  cy.get(
    '.v-dialog__content--active > .v-dialog > .v-sheet > .v-card__actions > .green--text'
  ).click();
  cy.get('[data-cy="createButton"]').click();
});

Cypress.Commands.add('createInvalidTournament', (tile, numbQuestions) => {
  let backbutton =
    '.v-date-picker-header > :nth-child(1) > .v-btn__content > .v-icon';
  let forwoardButton =
    '.v-dialog__content--active > .v-dialog > .v-sheet > .v-card__text > .v-tabs > .v-window > .v-window__container > .v-window-item > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-header > :nth-child(3) > .v-btn__content > .v-icon';

  cy.contains('Tournament').click();
  cy.contains('Create').click();
  cy.get('[data-cy="title"]').type(tile);
  cy.get('[data-cy="AssessmentTitle"]')
    .contains('Third mini-test')
    .click();
  cy.contains(numbQuestions).click();
  cy.get('.row > :nth-child(1) > .v-input').click();
  cy.get(backbutton).click();
  cy.get(
    '.tab-reverse-transition-enter-active > tbody > :nth-child(1) > :nth-child(4) > .v-btn'
  ).click();
  cy.get('.green--text').click();
  cy.get(':nth-child(3) > .v-input').click();
  cy.get(forwoardButton).click();
  cy.get(forwoardButton).click();
  cy.get(forwoardButton).click();
  cy.get(forwoardButton).click();
  cy.get(forwoardButton).click();
  cy.get(
    '.tab-transition-enter-active > tbody > :nth-child(2) > :nth-child(1) > .v-btn'
  ).click();
  cy.get(
    '.v-dialog__content--active > .v-dialog > .v-sheet > .v-card__actions > .green--text'
  ).click();
  cy.get('[data-cy="createButton"]').click();
});

Cypress.Commands.add('createBlankTournament', () => {
  cy.contains('Tournament').click();
  cy.contains('Create').click();
  cy.get('[data-cy="createButton"]').click();
});

Cypress.Commands.add('listAvailableTournaments', () => {
  cy.contains('Tournament').click();
  cy.contains('Available').click();
});

Cypress.Commands.add('listEnrolledTournaments', () => {
  cy.contains('Tournament').click();
  cy.contains('Enrolled').click();
});

Cypress.Commands.add('listOwnTournaments', () => {
  cy.contains('Tournament').click();
  cy.contains('Own').click();
});

Cypress.Commands.add('listAllTournaments', () => {
  cy.contains('Administration').click();
  cy.contains('All Tournaments').click();
});

Cypress.Commands.add('signInSignOut', title => {
  cy.contains(title)
    .parent()
    .find('[data-cy="details"]')
    .click();
  cy.get('[data-cy="sign"]').click();
});

Cypress.Commands.add('assertOwnAny', title => {
  cy.contains(title)
    .parent()
    .should('have.length', 1)
    .children()
    .should('have.length', 6);
});

Cypress.Commands.add('assertAvailableEnrolled', title => {
  cy.contains(title)
    .parent()
    .should('have.length', 1)
    .children()
    .should('have.length', 5);
});

//##############################TOURNAMENTS FEATURE END##########################################

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

Cypress.Commands.add('demoStudentLoginDashboard', () => {
  cy.visit('/');
  cy.get('[data-cy="studentButton"]').click();
  cy.get('[data-cy="Dashboard"]').click();
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

Cypress.Commands.add('deletePost', studentQuestion => {
  cy.contains(studentQuestion)
    .parent()
    .should('have.length', 1)
    .parent()
    .should('have.length', 1)
    .find('[data-cy="deleteButton"]')
    .click({ force: true });
});

Cypress.Commands.add('answerPost', (studentQuestion, teacherAnswer) => {
  cy.contains(studentQuestion)
    .parent()
    .should('have.length', 1)
    .parent()
    .should('have.length', 1)
    .find('[data-cy="showButton"]')
    .click({ force: true })
    .get('[data-cy="answerPostButton"]')
    .click({ force: true })
    .get('[data-cy="typeAnswer"]')
    .type(teacherAnswer.concat('{enter}{esc}'));
});

Cypress.Commands.add('viewPost', studentQuestion => {
  cy.contains(studentQuestion)
    .parent()
    .should('have.length', 1)
    .parent()
    .should('have.length', 1)
    .find('[data-cy="showButton"]')
    .click({ force: true });
});

Cypress.Commands.add('comment', (type, comment) => {
  cy.get('[data-cy="'.concat(type).concat('Button"]'))
    .click({ force: true })
    .get('[data-cy="'.concat(type).concat('Box"]'))
    .click({ force: true })
    .type(comment.concat('{enter}{esc}'));
});

Cypress.Commands.add('editPost', (studentQuestion, newQuestion) => {
  cy.contains(studentQuestion)
    .parent()
    .should('have.length', 1)
    .parent()
    .should('have.length', 1)
    .find('[data-cy="editButton"]')
    .click({ force: true })
    .get('[data-cy="dialogEditPost"]')
    .type('{selectall}{backspace}'.concat(newQuestion))
    .get('[data-cy="saveEditButton"]')
    .click({ force: true });
});

Cypress.Commands.add('editAnswer', (studentQuestion, newAnswer) => {
  cy.contains(studentQuestion)
    .parent()
    .should('have.length', 1)
    .parent()
    .should('have.length', 1)
    .find('[data-cy="editAnswerButton"]')
    .click({ force: true })
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
    .click({ force: true });
});

//################################################# Suggestion feature

Cypress.Commands.add('demoStudentLoginSuggestion', () => {
  cy.visit('/');
  cy.get('[data-cy="studentButton"]').click();
  cy.get('[data-cy="Student"]').click();
  cy.contains('Suggestions').click();
});

Cypress.Commands.add('demoTeacherLoginSuggestion', () => {
  cy.visit('/');
  cy.get('[data-cy="teacherButton"]').click();
  cy.get('[data-cy="management"]').click();
  cy.contains('Suggestions').click();
});

Cypress.Commands.add('createSuggestion', content => {
  cy.get('[data-cy="createButton"]').click();
  cy.get('[data-cy="content"]').type(content);
  cy.get('[data-cy="topics"]').type('a'.concat('{downarrow}{enter}'));
  cy.get('[data-cy="saveButton"]').click();
});

Cypress.Commands.add('listSuggestion', contentPart => {
  cy.get('[data-cy="search"]').type(contentPart.concat('{downarrow}{enter}'));
  cy.get('tbody > :nth-child(1) > :nth-child(5) > :nth-child(1)').click();
  cy.get('[data-cy="close"]').click();
});

Cypress.Commands.add('notfoundSuggestion', contentPart => {
  cy.get('[data-cy="search"]').type(contentPart.concat('{downarrow}{enter}'));
});

Cypress.Commands.add('createBlankSuggestion', content => {
  cy.get('[data-cy="Student"]').click();
  cy.contains('Suggestions').click();
  cy.get('[data-cy="createButton"]').click();
  cy.get('[data-cy="saveButton"]').click();
});

Cypress.Commands.add('QuickApproveSuggestion', content => {
  cy.contains(content);
  cy.get('[data-cy="quickApproveButton"]')
    .first()
    .click({ force: true });
});

Cypress.Commands.add('QuickRejectSuggestion', content => {
  cy.contains(content);
  cy.get('[data-cy="quickRejectButton"]')
    .first()
    .click({ force: true });
});

Cypress.Commands.add('ShowSuggestion', content => {
  cy.contains(content);
  cy.get('[data-cy="showSuggestionButton"]')
    .first()
    .click({ force: true });
});

Cypress.Commands.add('CloseSuggestion', content => {
  cy.get('[data-cy="closeSuggestionButton"]').click({ force: true });
});

Cypress.Commands.add('ApproveSuggestion', content => {
  cy.get('[data-cy="approveSuggestionButton"]').click({ force: true });
});

Cypress.Commands.add('RejectSuggestion', content => {
  cy.get('[data-cy="rejectSuggestionButton"]').click({ force: true });
});
