@regressionTest
Feature: Hide template from a list on Trello website

    @RQ-4 @TC-0
    Scenario: Successfully hide a template from the list
        Given The user navigate to the board
        When The user clicks on a template
        And The user clicks on the Hide from list button
        And The user clicks on the close deatils button
        Then The template will no longer appear in the list