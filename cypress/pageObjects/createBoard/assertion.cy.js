class CreateBoardAssertions {

    checkBoardNameIsContain(boardName) {
        cy.findByDataTestId("board-name-input").should("have.value", boardName)
        return this;
    }
}
export default CreateBoardAssertions;