/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../../support/datautils.cy";
import UpdateTemplateNameActions from "../../../../../pageObjects/r2_UpdateTemplateName/actions.cy";
import UpdateTemplateNameAssertions from "../../../../../pageObjects/r2_UpdateTemplateName/assertions.cy";

const boardName = "TestBoard";
const templateName = "myTemplate";
const newTemplateName = "myNewTemplate";
let boardUrl, boardId, boardsList;

const dataUtil = new DataUtils();
const updateTemplateNameAction = new UpdateTemplateNameActions();
const updateTemplateNameAssertion = new UpdateTemplateNameAssertions();

before(() => {
    // Step 1: Create a board in Trello
    dataUtil.createBoard(boardName).then((response) => {
        boardUrl = response.body.url;
        boardId = response.body.id;

        // Step 2: Get board lists
        return dataUtil.getBoardLists(boardId);
    }).then((response) => {
        boardsList = response.body;

        // Step 3: Create a card in the first list
        return dataUtil.createCard(boardsList[0].id, templateName, true);
    }).then(() => {
        // Step 4: Log into Trello
        cy.loginToTrello();
    });
});


Given("The user navigate to the board", () => {
    updateTemplateNameAction.openBoard(boardUrl);
});

When("The user clicks on the card template list button", () => {
    updateTemplateNameAction.clickOnCardTemplateListButton();
});
When("The user clicks on the Edit template button", () => {
    updateTemplateNameAction.clickEditTemplateButton();
});

When("The user clicks on the edit icon button", () => {
    updateTemplateNameAction.clickEditIconButton();
});

When("The user edits the template name", () => {
    updateTemplateNameAction.editTemplateName(newTemplateName);
});

When("The user edits the template name with empty value", () => {
    updateTemplateNameAction.editTemplateName("");
});
Then("The updated name will be displayed in the card template header", () => {
    updateTemplateNameAssertion.verifyUpdatedNameIsDisplayed(newTemplateName);
});
Then("The previos name will be displayed in the card template header", () => {
    updateTemplateNameAssertion.verifyUpdatedNameIsDisplayed(templateName);
});
after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})