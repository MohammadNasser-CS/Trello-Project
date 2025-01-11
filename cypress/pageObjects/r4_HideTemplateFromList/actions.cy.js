class HideTemplateFromListActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnATemplateCard(sourceListIndex) {
        cy.findByDataTestId("list").eq(sourceListIndex).within(() => {
            cy.findByDataTestId("list-card").first().click();
        });
        return this;
    }
    clickHideFromListButton() {
        cy.findByDataTestId('card-back-archive-button')
            .click();
        return this;
    }
    clickOnCloseTemplateDetailsButton() {
        cy.findByDataTestId("card-back-name").findByDataTestId("CloseIcon").first().click()
        return this;
    }
}
export default HideTemplateFromListActions;