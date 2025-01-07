/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../../support/datautils.cy";
import CreateNewCardTemplateActions from "../../../../../pageObjects/r1_CreateNewCardTemplate/actions.cy";
import CreateNewCardTemplateAssertions from "../../../../../pageObjects/r1_CreateNewCardTemplate/assertions.cy";

const boardName = "TestBoard";
const templateName = "myTemplate";
let boardUrl, boardId;

const dataUtil = new DataUtils();
const createNewCardTemplateAction = new CreateNewCardTemplateActions();
const createNewCardTemplateAssertion = new CreateNewCardTemplateAssertions();

before(() => {
    // create a board in trello 
    dataUtil.createBoard(boardName)
        .then((response) => {
            boardUrl = response.body.url
            boardId = response.body.id
        })
    cy.loginToTrello()
})


Given("The user navigate to the board", () => {
    createNewCardTemplateAction.openBoard(boardUrl);
});

When("The user clicks on the card template list button", () => {
    createNewCardTemplateAction.clickOnCardTemplateListButton();
});
When("The user clicks Create a new template button", () => {
    createNewCardTemplateAction.clickOnCreateANewTemplateButton();
});

When("The user fill the Template title field", () => {
    createNewCardTemplateAction.fillTheTemplateTitleField(templateName);
});

When("The user clicks on the Add button", () => {
    createNewCardTemplateAction.clickOnAddButton();
});
When("The user clicks on the close deatils button", () => {
    createNewCardTemplateAction.clickOnCloseTemplateDetailsButton();
});
When("The user clicks on the card template list button", () => {
    createNewCardTemplateAction.clickOnCardTemplateListButton();
});

Then("The new template will appear in the template list", () => {
    createNewCardTemplateAssertion.checkTemplateListIsContainsTheTemplate(templateName);
});

after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})