@regressionTest
Feature: Create a card template on Trello website
    @focus
    Scenario: Successfully create a new card template
        Given The user navigate to the board
        When The user clicks on the card template list button
        And The user clicks Create a new template button
        And The user clicks on the Add button
        Then The new template should not appear in the template list