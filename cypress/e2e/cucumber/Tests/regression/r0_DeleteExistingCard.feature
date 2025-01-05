@regressionTest
Feature: Delete an existing card on Trello website
    Scenario: Prevent deleting a card without confirmation
        Given The user navigate to the board
        When The user clicks on the card
        And The user clicks the Archive option
        And The user clicks the Delete option
        And The user does not Confirms the Delete action
        And The user clicks the Close button
        And The user clicks the Show More button
        And The user clicks the Archived Items button
        Then The card should still exist in the Archived Items list
