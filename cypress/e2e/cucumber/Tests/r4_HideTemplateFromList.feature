@smokeTest
Feature: Hide template from a list on Trello website

    Scenario: Successfully hide a template from the list
        Given The user logs into the Trello website
        And Navigates to a board containing templates
        When The user clicks on a template options menu
        And Selects "Hide template"
        Then The template will no longer appear in the list

    @regressionTest
    Scenario: Ensure hidden template can be viewed in the hidden items section
        Given The user logs into the Trello website
        And Navigates to a board containing templates
        When The user clicks on a template options menu
        And Selects "Hide template"
        Then The template should appear in the hidden items section
