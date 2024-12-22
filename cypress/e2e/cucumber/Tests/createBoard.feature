@smokeTest
Feature: Create a board on Trello website

    Scenario: Create new board
        Given The user login to trello website
        When Clicks on Create button in navbar
        And Choose create board option
        And Types board title in board title field
        And Clicks on Create button
        Then The board will be created successfully