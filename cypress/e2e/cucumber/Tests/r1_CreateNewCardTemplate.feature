@smokeTest
Feature: Create a card template on Trello website

    Scenario: Successfully create a new card template
        Given The user logs into the Trello website
        When The user navigates to the templates section
        And Clicks on "Create new template"
        And Fills in the template details
        And Saves the template
        Then The new template will appear in the template list

@regressionTest
    Scenario: Show error when creating a template with an empty name
        Given The user logs into the Trello website
        When The user navigates to the templates section
        And Clicks on "Create new template"
        And Leaves the template name field empty
        And Saves the template
        Then An error message "Template name is required" should appear
