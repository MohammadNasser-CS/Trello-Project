class DeleteCardAssertions {
    checkArchiveIsNotContainCard(cardName) {
        cy.get('p.js-empty-message').then(($emptyMessage) => {
            if ($emptyMessage.hasClass('hide')) {
                cy.get('[data-testid="card-name"]').each((card) => {
                    cy.wrap(card).invoke('text').then((text) => {
                        // Check if the deleted card name is still present
                        if (text.trim() === cardName) {
                            throw new Error(`Card with name "${cardName}" still exists.`);
                        }
                    });
                }).then(() => {
                    cy.log(`Card with name "${cardName}" has been successfully deleted.`);
                });
            } else {
                cy.log("No cards found, test passes as all cards are deleted.");
            }
        });


        return this;
    }
    checkCardIsStillInArchive(cardName) {
        cy.findByDataTestId("card-name").then((cards) => {
            if (cards.length > 0) {
                let found = false; 
                cy.wrap(cards).each((card) => {
                    cy.wrap(card).invoke('text').then((text) => {
                        if (text.trim() === cardName) {
                            found = true;
                        }
                    });
                }).then(() => {
                    expect(found).to.be.true; 
                });
            } else {
                cy.log("No cards available");
                throw new Error("No cards available to check");
            }
        });


        return this;
    }
}
export default DeleteCardAssertions;