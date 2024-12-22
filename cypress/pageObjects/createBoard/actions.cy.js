class CreateBoardActions {

    clickOnNavbarCreateButton() {
        cy.findByDataTestId("header-create-menu-button").click();
        return this;
    }

    clickOnCreateBoardOption() {
        cy.findByDataTestId("header-create-board-button").click();
        return this;
    }

    typeInBoardTitleInputField(boardName) {
        cy.findByDataTestId("create-board-title-input").type(boardName)
        return this;
    }

    clickOnCreateButton() {
        cy.findByDataTestId("create-board-submit-button").click();
        cy.wait(3000)
        return this;
    }
}
export default CreateBoardActions;