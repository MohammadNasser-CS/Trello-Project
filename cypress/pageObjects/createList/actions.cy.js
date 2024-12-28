class CreateListActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }

    clickOnAddAnotherListButton() {
        cy.findByDataTestId("list-composer-button").first().click()
        return this;
    }

    typeInListNameInputField(listName) {
        cy.findByDataTestId("list-name-textarea").filter((_, el) => !el.value.trim()).type(listName)
        return this;
    }

    clickOnAddListButton() {
        cy.findByDataTestId("list-composer-add-list-button").click()
        return this;
    }

}
export default CreateListActions;