Feature: Test Login Funct

  @yash
  Scenario: Check login success
    Given Browser is open
    And User is on the Login Page
    When User enters user name and password
    Then User navigates to the home page
