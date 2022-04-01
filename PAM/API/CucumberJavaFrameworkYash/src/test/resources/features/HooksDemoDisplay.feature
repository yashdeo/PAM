Feature: Check hooks with login
  @hooksDemo
  Scenario: Test the hooks
    Given User is on the Login Page for hooks demo
    When user enters login name and password and login
    Then Home page should be displayed