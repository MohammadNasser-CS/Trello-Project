class CreateNewCardTemplateAssertions {
    checkTemplateListIsContainsTheTemplate(templateName) {

        cy.get('[data-testid="card-template-link-component"] > div > div:first-child').then((templateList) => {
            if (templateList.length > 0) {
                let found = false;
                cy.wrap(templateList).each((template) => {
                    cy.wrap(template).invoke('html').then((text) => {
                        console.log(`the text value is :${text}`);
                        if (text.trim() === templateName) {
                            found = true;
                        }
                    });
                }).then(() => {
                    expect(found).to.be.true;
                });
            } else {
                cy.log("No templates available");
                throw new Error(`Template with name "${templateName}" dose not exists.`);
            }
        });


        return this;
    }
    checkTemplateListIsNotContainsTheTemplate(templateName) {
        // Get the list of templates
        cy.get('[data-testid="card-template-link-component"] > div > div:first-child').should("not.exist");

        return this;
    }

}
export default CreateNewCardTemplateAssertions;