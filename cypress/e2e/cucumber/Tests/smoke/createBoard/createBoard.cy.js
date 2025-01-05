import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateBoardActions from "../../../../../pageObjects/createBoard/actions.cy";
import CreateBoardAssertions from "../../../../../pageObjects/createBoard/assertion.cy";

const createBoardAction = new CreateBoardActions();
const createBoardAssertion = new CreateBoardAssertions();

const boardName = "TrelloProject";

Given("The user login to trello website", () => {
    cy.loginToTrello()
})

When("Clicks on Create button in navbar", () => {
    createBoardAction.clickOnNavbarCreateButton()
})

When("Choose create board option", () => {
    createBoardAction.clickOnCreateBoardOption()
})

When("Types board title in board title field", () => {
    createBoardAction.typeInBoardTitleInputField(boardName)
})

When("Clicks on Create button", () => {
    createBoardAction.clickOnCreateButton();
})

Then("The board will be created successfully", () => {
    createBoardAssertion.checkBoardNameIsContain(boardName)
})