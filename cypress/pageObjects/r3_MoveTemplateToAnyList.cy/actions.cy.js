class MoveTemplateToAnyListActions {
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
    clickMoveTemplateButton() {
        cy.findByDataTestId('card-back-move-card-button')
            .click();
        return this;
    }
    clickOnListSelector() {
        cy.findByDataTestId("move-card-popover-select-list-destination").find(".value-container")
            .click();
        return this;
    }
    selectTheListToMoveTo(destinationIndex) {
        cy.get('#react-select-3-listbox > #react-select-3-listbox').should("be.visible")
            .find(`#react-select-3-option-${destinationIndex}`)
            .click();
        return this;
    }
    clickOnMoveConfirmationButton() {
        cy.findByDataTestId('move-card-popover-move-button').should("be.visible").click()
        return this;
    }
    clickOnCloseTemplateDetailsButton() {
        cy.findByDataTestId("card-back-name").findByDataTestId("CloseIcon").first().click()
        return this;
    }
}
export default MoveTemplateToAnyListActions;