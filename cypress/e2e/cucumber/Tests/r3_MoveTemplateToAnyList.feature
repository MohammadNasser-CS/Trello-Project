@smokeTest
Feature: Move template to a different list on Trello website

    Scenario: Successfully move a template to another list
        Given The user logs into the Trello website
        And Navigates to a board containing lists
        When The user clicks on a template
        And Drags and drops the template to a new list
        Then The template will appear in the new list

@regressionTest
    Scenario: Prevent moving template to an invalid list
        Given The user logs into the Trello website
        And Navigates to a board containing lists
        When The user clicks on a template
        And Attempts to move the template to an invalid list
        Then The template should remain in its original list
