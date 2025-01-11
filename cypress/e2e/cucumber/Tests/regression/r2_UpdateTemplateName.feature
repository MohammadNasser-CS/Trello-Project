@regressionTest
Feature: Update template name on Trello website
    @RQ-2 @TC-0
    Scenario: Successfully update the name of a template
        Given The user navigate to the board
        When The user clicks on the card template list button
        And The user clicks on the Edit template button
        And The user clicks on the edit icon button
        And The user edits the template name
        Then The updated name will be displayed in the card template header
    @RQ-2 @TC-1
    Scenario: Update the name of a template to empty value
        Given The user navigate to the board
        When The user clicks on the card template list button
        And The user clicks on the Edit template button
        And The user clicks on the edit icon button
        And The user edits the template name with empty value
        Then The previos name will be displayed in the card template header
