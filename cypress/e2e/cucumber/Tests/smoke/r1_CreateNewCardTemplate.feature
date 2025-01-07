@smokeTest
Feature: Create a card template on Trello website
    @focus
    Scenario: Successfully create a new card template
        Given The user navigate to the board
        When The user clicks on the card template list button
        And The user clicks Create a new template button
        And The user fill the Template title field
        And The user clicks on the Add button
        And The user clicks on the close deatils button
        And The user clicks on the card template list button
        Then The new template will appear in the template list

    # @regressionTest
    # Scenario: Show error when creating a template with an empty name
    #     Given The user logs into the Trello website
    #     When The user navigates to the templates section
    #     And Clicks on "Create new template"
    #     And Leaves the template name field empty
    #     And Saves the template
    #     Then An error message "Template name is required" should appear