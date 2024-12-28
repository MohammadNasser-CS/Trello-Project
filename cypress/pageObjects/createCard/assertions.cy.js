class CreateCardAssertions {
    checkListIsContainCard(cardName) {
        cy.findByDataTestId("card-name").should("contain", cardName)
        return this;
    }
}
export default CreateCardAssertions;