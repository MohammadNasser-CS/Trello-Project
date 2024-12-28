/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../support/datautils.cy";
import CreateCardActions from "../../../../pageObjects/createCard/actions.cy";
import CreateCardAssertions from "../../../../pageObjects/createCard/assertions.cy";


const boardName = "My-Project"
const cardName = "My Card";

let boardUrl, boardId;

const dataUtil = new DataUtils();
const createCardAction = new CreateCardActions();
const createCardAssertion = new CreateCardAssertions();

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
    createCardAction.openBoard(boardUrl)
})

When("Clicks on Add a card button", () => {
    createCardAction.clickOnAddACardButton();
})

When("Types card name in card title input field", () => {
    createCardAction.typeInCardTitleInputField(cardName)
})

When("Clicks on Add Card button", () => {
    createCardAction.clickOnAddCardButton();
})

Then("The card will be created successfully", () => {
    createCardAssertion.checkListIsContainCard(cardName)
})

after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})