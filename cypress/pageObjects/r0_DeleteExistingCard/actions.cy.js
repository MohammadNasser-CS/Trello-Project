class DeleteCardActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }

    clickOnACard() {
        cy.findByDataTestId("list").first().within(() => {
            cy.findByDataTestId("list-card").first().click();
        });
        return this;
    }

    clickOnArchiveButton() {
        cy.findByDataTestId("card-back-archive-button").click()
        return this;
    }
    clickOnDeleteButton() {
        cy.findByDataTestId("card-back-delete-card-button").click()
        return this;
    }
    clickOnDeleteConfirmationButton() {
        cy.findByDataTestId("popover-confirm-button").click()
        return this;
    }
    clickOnCloseConfirmationDeletionButton() {
        cy.findByDataTestId("popover-close").first().click()
        return this;
    }
    clickOnCloseCardButton() {
        cy.findByDataTestId("CloseIcon").first().click()
        return this;
    }
    clickOnShowMoreButton() {
        cy.findByDataTestId('board-share-button')
            .siblings('button') // Select sibling buttons
            .click();
    }
    clickOnArchivedItemsButton() {
        cy.findByDataTestId("ArchiveIcon").click();
    }
}
export default DeleteCardActions;