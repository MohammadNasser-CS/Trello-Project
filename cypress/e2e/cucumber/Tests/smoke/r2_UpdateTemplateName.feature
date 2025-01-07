@smokeTest
Feature: Update template name on Trello website

    Scenario: Successfully update the name of a template
        Given The user navigate to the board
        When The user clicks on the card template list button
        And The user clicks on the Edit template button
        And The user clicks on the edit icon button
        And The user edits the template name
        Then The updated name will be displayed in the card template header

# @regressionTest
# Scenario: Prevent updating template name with invalid characters
#     Given The user logs into the Trello website
#     And Navigates to the templates section
#     When The user clicks on a template
#     And Edits the template name with special characters
#     And Saves the changes
#     Then An error message "Invalid characters in template name" should appear
