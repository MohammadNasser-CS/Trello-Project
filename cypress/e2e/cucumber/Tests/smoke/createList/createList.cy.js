/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DataUtils from "../../../../../support/datautils.cy";
import CreateListActions from "../../../../../pageObjects/createList/actions.cy";
import CreateListAssertions from "../../../../../pageObjects/createList/assertions.cy";


const boardName = "Board-Name"
const listName = "List-Name";

let boardUrl, boardId;

const dataUtil = new DataUtils();
const createListAction = new CreateListActions();
const createListAssertion = new CreateListAssertions();

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
    createListAction.openBoard(boardUrl)
})

When("Clicks on Add another list button", () => {
    createListAction.clickOnAddAnotherListButton();
})

When("Types list name in list name input field", () => {
    createListAction.typeInListNameInputField(listName)
})

When("Clicks on Add list button", () => {
    createListAction.clickOnAddListButton();
})

Then("The list will be created successfully", () => {
    createListAssertion.checkBoardIsContainList(listName)
})

after(() => {
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})