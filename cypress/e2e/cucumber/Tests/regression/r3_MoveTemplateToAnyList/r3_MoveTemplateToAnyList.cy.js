/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../../support/datautils.cy";
import MoveTemplateToAnyListActions from "../../../../../pageObjects/r3_MoveTemplateToAnyList.cy/actions.cy";
import MoveTemplateToAnyListAssertions from "../../../../../pageObjects/r3_MoveTemplateToAnyList.cy/assertions.cy";
import PublicActions from "../../../../../pageObjects/publicActions/publicActions.cy";

const boardName = "TestBoard";
const templateName = "myTemplate";
let boardUrl, boardId, boardsList;
let sourceListIndex, destinationListIndex;
const publicActions = new PublicActions();
const dataUtil = new DataUtils();
const moveTemplateToAnyListAction = new MoveTemplateToAnyListActions();
const moveTemplateToAnyListAssertion = new MoveTemplateToAnyListAssertions();

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
        destinationListIndex = publicActions.generateRandomIndex(boardsList.length, sourceListIndex);
        cy.wait(3000);

        // Step 3: Create a card in the first list
        return dataUtil.createCard(boardsList[sourceListIndex].id, templateName, true);
    }).then(() => {
        // Step 4: Log into Trello
        cy.loginToTrello();
    });
});


Given("The user navigate to the board", () => {
    moveTemplateToAnyListAction.openBoard(boardUrl);
});

When("The user clicks on a template", () => {
    moveTemplateToAnyListAction.clickOnATemplateCard(sourceListIndex);
});
When("The user clicks on the Move button", () => {
    moveTemplateToAnyListAction.clickMoveTemplateButton();
    cy.wait(3000);
});

When("The user clicks on the list selector", () => {
    moveTemplateToAnyListAction.clickOnListSelector();
});
When("The user selects the list to move to", () => {
    moveTemplateToAnyListAction.selectTheListToMoveTo(destinationListIndex);
});
When("The user clicks on the Move confirmation button", () => {
    moveTemplateToAnyListAction.clickOnMoveConfirmationButton();
});
When("The user clicks on the close deatils button", () => {
    moveTemplateToAnyListAction.clickOnCloseTemplateDetailsButton();
});
Then("The template will appear in the new list", () => {
    moveTemplateToAnyListAssertion.verifyTemplateAppearsInNewList(destinationListIndex, templateName);
});

after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})