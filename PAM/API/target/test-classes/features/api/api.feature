@API

Feature: Fetch the weather report for the Location and the date
  As a User, I want to fetch the weather report for the location and the date
  So that the weatherreport for the desired location and date should be available

  Background: User has to be on the base uri
    Given user is on the base URI

  @Positive
  Scenario: Validate the status code of the valid response and check the headers
    When the user sends the get request for the locations longitude "53.1003" and latitude "0.9936" to fetch all the users
    Then the success code 200 along with all the available users and the correct response headers should be displayed

  @Positive
  Scenario Outline: Search the location to get the "woeid" for the given location and then validate the reponse
    When the user searches with the location "<location>"
    And send the request to fetch the weather report for the date "<date>"
    Then the valid response for the selected location and date should be return

    Examples:
      | location   | date       |
      | Nottingham | 2020/10/05 |

  @Negative
  Scenario Outline: Check the error codes for the incorrect location and incorrect date
    When the user searches with the location "<location>"
    And send the request to fetch the weather report for the date "<date>"
    Then the error code "<errorcode>" should be displayed

    Examples:
      | location | date       |errorcode|
      | 3232323  | 2020/28/28 | 404        |


  @Negative
  Scenario Outline: Validate the status code of the invalid longitude and lattitudes
    When the user sends the get request for the locations longitude "<longitude>" and latitude "<latitude>" to fetch all the users
    Then the error code "<errorcode>" should be displayed
    Examples:
      | longitude | latitude | errorcode |
      | sdsds     | dsdss    | 500       |




