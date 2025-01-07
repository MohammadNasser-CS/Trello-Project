class UpdateTemplateNameAssertions {
    verifyUpdatedNameIsDisplayed(newTemplateName) {
        cy.get("#card-back-name")
            .invoke("text")
            .then((text) => text.trim())
            .should("eq", newTemplateName.trim());
        return this;
    }
}
export default UpdateTemplateNameAssertions;