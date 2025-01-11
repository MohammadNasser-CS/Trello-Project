class MoveTemplateToAnyListAssertions {
    verifyTemplateAppearsInNewList(destinationIndex, templateName) {
        cy.findByDataTestId("list")
            .eq(destinationIndex)
            .findByDataTestId("card-name")
            .then((cardElements) => {
                if (cardElements.length > 0) {
                    let found = false;
                    cy.wrap(cardElements).each((cardElement) => {
                        cy.wrap(cardElement).invoke('text').then((text) => {
                            if (text.trim() === templateName.trim()) {
                                found = true;
                            }
                        });
                    }).then(() => {
                        expect(found, `Template "${templateName}" should appear in the list`).to.be.true;
                    });
                } else {
                    cy.log("No templates available");
                    throw new Error(`Template with name "${templateName}" dose not exists.`);
                }
            });
        return this;
    }

}
export default MoveTemplateToAnyListAssertions;