class DeleteCardAssertions {
    checkArchiveIsNotContainCard(cardName) {//[data-testid="board-menu-current-panel"] div.js-react-root ~ p 
        cy.get('.archived-list-card [data-testid="trello-card"]')
            .should("not.exist", `Custom message: Card with name "${cardName}" has been successfully deleted.`)
            .then((cardElements) => {
                if (cardElements === null) {
                    expect(true, `Card with name "${cardName}" has been successfully deleted.`).to.be.true;
                }
                else {
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