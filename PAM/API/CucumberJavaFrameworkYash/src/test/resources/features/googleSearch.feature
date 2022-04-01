Feature: Test google search

  Scenario: Validato google search
    Given Browser is open
    And User is on the search page
    When user enters a search criteria
    Then the results should be displayed
