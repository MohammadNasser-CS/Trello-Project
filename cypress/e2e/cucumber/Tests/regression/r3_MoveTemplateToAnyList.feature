@regressionTest
Feature: Move template to a different list on Trello website

    Scenario: Successfully move a template to another list
        Given The user navigate to the board
        When The user clicks on a template
        And The user clicks on the Move button
        And The user clicks on the list selector
        And The user selects the list to move to
        And The user clicks on the Move confirmation button
        And The user clicks on the close deatils button
        Then The template will appear in the new list