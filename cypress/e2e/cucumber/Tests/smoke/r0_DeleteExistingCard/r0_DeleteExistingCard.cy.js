/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../../support/datautils.cy";
import DeleteCardActions from "../../../../../pageObjects/r0_DeleteExistingCard/actions.cy";
import DeleteCardAssertions from "../../../../../pageObjects/r0_DeleteExistingCard/assertions.cy";



const boardName = "TestBoard"
const cardName = "My-Card";
let boardUrl, boardId, boardsList;

const dataUtil = new DataUtils();
const deleteCardAction = new DeleteCardActions();
const deleteCardAssertion = new DeleteCardAssertions();

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
        return dataUtil.createCard(boardsList[0].id, cardName);
    }).then(() => {
        // Step 4: Log into Trello
        cy.loginToTrello();
    });
});



Given("The user navigate to the board", () => {
    deleteCardAction.openBoard(boardUrl)
});

When("The user clicks on the card", () => {
    deleteCardAction.clickOnACard();
});

When("The user clicks the Archive option", () => {
    deleteCardAction.clickOnArchiveButton();
});

When("The user clicks the Delete option", () => {
    deleteCardAction.clickOnDeleteButton();
});
When("The user Confirms the Delete action", () => {
    deleteCardAction.clickOnDeleteConfirmationButton();
});
When("The user clicks the Show More button", () => {
    deleteCardAction.clickOnShowMoreButton();
});
When("The user clicks the Archived Items button", () => {
    deleteCardAction.clickOnArchivedItemsButton();
});

Then("The card will no longer appear in the Archived Items list", () => {
    deleteCardAssertion.checkArchiveIsNotContainCard(cardName)
});

after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})