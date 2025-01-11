class HideTemplateFromListAssertions {
    verifyTemplateNotAppearsTheList(destinationIndex, templateName) {
        cy.findByDataTestId("list")
            .eq(destinationIndex)
            .findByDataTestId("card-name").should("not.exist", `Custom message: Template with name "${templateName}" does not exist.`)
            .then((cardElements) => {
                if (cardElements===null) {
                    expect(true, `Template with name "${templateName}" does not exist.`).to.be.true;
                } else {
                    let found = false;
                    cy.wrap(cardElements).each((cardElement) => {
                        cy.wrap(cardElement).invoke('text').then((text) => {
                            if (text.trim() === templateName.trim()) {
                                found = true; // Template name found
                            }
                        });
                    }).then(() => {
                        expect(found, `Template "${templateName}" should not appear in the list`).to.be.false;
                    });
                }
            });
        return this;
    }



}
export default HideTemplateFromListAssertions;