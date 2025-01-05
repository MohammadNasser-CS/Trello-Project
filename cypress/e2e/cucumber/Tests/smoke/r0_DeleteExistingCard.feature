@smokeTest
Feature: Delete an existing card on Trello website
    @focus
    Scenario: Successfully delete a card
        Given The user navigate to the board
        When The user clicks on the card
        And The user clicks the Archive option
        And The user clicks the Delete option
        And The user Confirms the Delete action
        And The user clicks the Show More button
        And The user clicks the Archived Items button
        Then The card will no longer appear in the Archived Items list