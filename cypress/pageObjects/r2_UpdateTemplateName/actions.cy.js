class UpdateTemplateNameActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnCardTemplateListButton() {
        cy.findByDataTestId("card-template-list-button").first().click();
        return this;
    }
    clickEditTemplateButton() {
        cy.findByDataTestId('create-template-button-from-card-composer')
            .siblings('button') // Select sibling buttons
            .click();
        return this;
    }
    editTemplateName(newTemplateName) {
        if (newTemplateName.length > 0) {
            cy.findByDataTestId("card-back-title-input").clear().type(`${newTemplateName}{enter}`);
            return this;
        }
        cy.findByDataTestId("card-back-title-input").clear().type("{enter}");
        return this;
    }
    clickEditIconButton() {
        cy.findByDataTestId('card-template-link-component')
            .next('div')
            .find('[data-testid="EditIcon"]')
            .click();
        return this;
    }
    clickOnCloseTemplateDetailsButton() {
        cy.get('[data-testid="card-back-name"] [data-testid="CloseIcon"]').first().click()
        return this;
    }
}
export default UpdateTemplateNameActions;