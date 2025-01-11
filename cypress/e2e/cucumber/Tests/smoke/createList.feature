@smokeTest
Feature: Create List in trello website

    Scenario: Validate that the user can create a new list
        Given The user navigate to the board
        When Clicks on Add another list button
        And Types list name in list name input field
        And Clicks on Add list button
        Then The list will be created successfully