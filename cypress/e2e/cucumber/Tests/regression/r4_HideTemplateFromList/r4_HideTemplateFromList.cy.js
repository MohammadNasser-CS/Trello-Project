/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../../support/datautils.cy";
import PublicActions from "../../../../../pageObjects/publicActions/publicActions.cy";
import HideTemplateFromListActions from "../../../../../pageObjects/r4_HideTemplateFromList/actions.cy";
import HideTemplateFromListAssertions from "../../../../../pageObjects/r4_HideTemplateFromList/assertions.cy";

const boardName = "TestBoard";
const templateName = "myTemplate";
let boardUrl, boardId, boardsList;
let sourceListIndex;
const publicActions = new PublicActions();
const dataUtil = new DataUtils();
const hideTemplateFromListAction = new HideTemplateFromListActions();
const hideTemplateFromListAssertion = new HideTemplateFromListAssertions();

before(() => {
    // Step 1: Create a board in Trello
    dataUtil.createBoard(boardName).then((response) => {
        boardUrl = response.body.url;
        boardId = response.body.id;

        // Step 2: Get board lists
        return dataUtil.getBoardLists(boardId);
    }).then((response) => {
        boardsList = response.body;
        sourceListIndex = publicActions.generateRandomIndex(boardsList.length, -1);
        cy.wait(3000);

        // Step 3: Create a card in the first list
        return dataUtil.createCard(boardsList[sourceListIndex].id, templateName, true);
    }).then(() => {
        // Step 4: Log into Trello
        cy.loginToTrello();
    });
});

Given("The user navigate to the board", () => {
    hideTemplateFromListAction.openBoard(boardUrl);
});

When("The user clicks on a template", () => {
    hideTemplateFromListAction.clickOnATemplateCard(sourceListIndex);
});

When("The user clicks on the Hide from list button", () => {
    hideTemplateFromListAction.clickHideFromListButton();
    cy.wait(3000);
});
When("The user clicks on the close deatils button", () => {
    hideTemplateFromListAction.clickOnCloseTemplateDetailsButton();
});
Then("The template will no longer appear in the list", () => {
    hideTemplateFromListAssertion.verifyTemplateNotAppearsTheList(sourceListIndex, templateName);
});

after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})