Feature: test login

  Scenario: Check login successful
    Given user is on the login page
    When User enters password and user name
    And Click login
    Then home page should be displayed

