class CreateListAssertions {
    checkBoardIsContainList(listName) {
        cy.findByDataTestId("list-name").should("contain", listName)
        return this;
    }
}
export default CreateListAssertions;