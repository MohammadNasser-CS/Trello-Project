class CreateNewCardTemplateActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnCardTemplateListButton() {
        cy.findByDataTestId("card-template-list-button").first().click();
        return this;
    }
    clickOnCreateANewTemplateButton() {
        cy.findByDataTestId("create-new-template-card-button").click();
        return this;
    }
    fillTheTemplateTitleField(templateTitle) {
        cy.findByDataTestId("create-template-card-composer").type(templateTitle);
        return this;
    }
    clickOnAddButton() {
        cy.findByDataTestId("new-template-card-submit-button").click()
        return this;
    }
    clickOnCloseTemplateDetailsButton() {
        cy.get('[data-testid="card-back-name"] [data-testid="CloseIcon"]').first().click()
        return this;
    }
}
export default CreateNewCardTemplateActions;