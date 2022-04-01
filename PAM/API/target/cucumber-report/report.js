$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/api/api.feature");
formatter.feature({
  "line": 3,
  "name": "Fetch the weather report for the Location and the date",
  "description": "As a User, I want to fetch the weather report for the location and the date\r\nSo that the weatherreport for the desired location and date should be available",
  "id": "fetch-the-weather-report-for-the-location-and-the-date",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.before({
  "duration": 1098132,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User has to be on the base uri",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherDateLocationStepDefs.user_is_on_the_base_URI()"
});
formatter.result({
  "duration": 420894115,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate the status code of the valid response and check the headers",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;validate-the-status-code-of-the-valid-response-and-check-the-headers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user sends the get request for the locations longitude \"53.1003\" and latitude \"0.9936\" to fetch all the users",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the success code 200 along with all the available users and the correct response headers should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "53.1003",
      "offset": 60
    },
    {
      "val": "0.9936",
      "offset": 83
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_user_sends_the_get_request_for_the_locations_longitude_and_latitude_to_fetch_all_the_users(String,String)"
});
formatter.result({
  "duration": 1795163609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 17
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_success_code_along_with_all_the_available_users_and_the_correct_response_headers_should_be_displayed(int)"
});
formatter.result({
  "duration": 4600681,
  "status": "passed"
});
formatter.after({
  "duration": 8476535,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Search the location to get the \"woeid\" for the given location and then validate the reponse",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;search-the-location-to-get-the-\"woeid\"-for-the-given-location-and-then-validate-the-reponse",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user searches with the location \"\u003clocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "send the request to fetch the weather report for the date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the valid response for the selected location and date should be return",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;search-the-location-to-get-the-\"woeid\"-for-the-given-location-and-then-validate-the-reponse;",
  "rows": [
    {
      "cells": [
        "location",
        "date"
      ],
      "line": 22,
      "id": "fetch-the-weather-report-for-the-location-and-the-date;search-the-location-to-get-the-\"woeid\"-for-the-given-location-and-then-validate-the-reponse;;1"
    },
    {
      "cells": [
        "Nottingham",
        "2020/10/05"
      ],
      "line": 23,
      "id": "fetch-the-weather-report-for-the-location-and-the-date;search-the-location-to-get-the-\"woeid\"-for-the-given-location-and-then-validate-the-reponse;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 269938,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User has to be on the base uri",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherDateLocationStepDefs.user_is_on_the_base_URI()"
});
formatter.result({
  "duration": 55609,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the location to get the \"woeid\" for the given location and then validate the reponse",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;search-the-location-to-get-the-\"woeid\"-for-the-given-location-and-then-validate-the-reponse;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user searches with the location \"Nottingham\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "send the request to fetch the weather report for the date \"2020/10/05\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the valid response for the selected location and date should be return",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nottingham",
      "offset": 37
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_user_searches_with_the_location(String)"
});
formatter.result({
  "duration": 1074913456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020/10/05",
      "offset": 59
    }
  ],
  "location": "WeatherDateLocationStepDefs.send_the_request_to_fetch_the_weather_report_for_the_date(String)"
});
formatter.result({
  "duration": 1722252776,
  "status": "passed"
});
formatter.match({
  "location": "WeatherDateLocationStepDefs.the_valid_response_for_the_selected_location_and_date_should_be_return()"
});
formatter.result({
  "duration": 5395428521,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertTrue(Assert.java:42)\n\tat org.testng.Assert.assertTrue(Assert.java:52)\n\tat com.PAMEDIA.test.StepDefinitions.api.WeatherDateLocationStepDefs.the_valid_response_for_the_selected_location_and_date_should_be_return(WeatherDateLocationStepDefs.java:37)\n\tat ✽.Then the valid response for the selected location and date should be return(features/api/api.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 2615396,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Check the error codes for the incorrect location and incorrect date",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;check-the-error-codes-for-the-incorrect-location-and-incorrect-date",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the user searches with the location \"\u003clocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "send the request to fetch the weather report for the date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the error code \"\u003cerrorcode\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;check-the-error-codes-for-the-incorrect-location-and-incorrect-date;",
  "rows": [
    {
      "cells": [
        "location",
        "date",
        "errorcode"
      ],
      "line": 32,
      "id": "fetch-the-weather-report-for-the-location-and-the-date;check-the-error-codes-for-the-incorrect-location-and-incorrect-date;;1"
    },
    {
      "cells": [
        "3232323",
        "2020/28/28",
        "404"
      ],
      "line": 33,
      "id": "fetch-the-weather-report-for-the-location-and-the-date;check-the-error-codes-for-the-incorrect-location-and-incorrect-date;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 340433,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User has to be on the base uri",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherDateLocationStepDefs.user_is_on_the_base_URI()"
});
formatter.result({
  "duration": 80818,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Check the error codes for the incorrect location and incorrect date",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;check-the-error-codes-for-the-incorrect-location-and-incorrect-date;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 25,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the user searches with the location \"3232323\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "send the request to fetch the weather report for the date \"2020/28/28\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the error code \"404\" should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3232323",
      "offset": 37
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_user_searches_with_the_location(String)"
});
formatter.result({
  "duration": 810236999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020/28/28",
      "offset": 59
    }
  ],
  "location": "WeatherDateLocationStepDefs.send_the_request_to_fetch_the_weather_report_for_the_date(String)"
});
formatter.result({
  "duration": 693098136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 16
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_error_code_should_be_displayed(int)"
});
formatter.result({
  "duration": 221835,
  "status": "passed"
});
formatter.after({
  "duration": 8485906,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Validate the status code of the invalid longitude and lattitudes",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;validate-the-status-code-of-the-invalid-longitude-and-lattitudes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "the user sends the get request for the locations longitude \"\u003clongitude\u003e\" and latitude \"\u003clatitude\u003e\" to fetch all the users",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the error code \"\u003cerrorcode\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;validate-the-status-code-of-the-invalid-longitude-and-lattitudes;",
  "rows": [
    {
      "cells": [
        "longitude",
        "latitude",
        "errorcode"
      ],
      "line": 41,
      "id": "fetch-the-weather-report-for-the-location-and-the-date;validate-the-status-code-of-the-invalid-longitude-and-lattitudes;;1"
    },
    {
      "cells": [
        "sdsds",
        "dsdss",
        "500"
      ],
      "line": 42,
      "id": "fetch-the-weather-report-for-the-location-and-the-date;validate-the-status-code-of-the-invalid-longitude-and-lattitudes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 725691,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User has to be on the base uri",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherDateLocationStepDefs.user_is_on_the_base_URI()"
});
formatter.result({
  "duration": 184379,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate the status code of the invalid longitude and lattitudes",
  "description": "",
  "id": "fetch-the-weather-report-for-the-location-and-the-date;validate-the-status-code-of-the-invalid-longitude-and-lattitudes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 36,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "the user sends the get request for the locations longitude \"sdsds\" and latitude \"dsdss\" to fetch all the users",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the error code \"500\" should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sdsds",
      "offset": 60
    },
    {
      "val": "dsdss",
      "offset": 81
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_user_sends_the_get_request_for_the_locations_longitude_and_latitude_to_fetch_all_the_users(String,String)"
});
formatter.result({
  "duration": 630686271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 16
    }
  ],
  "location": "WeatherDateLocationStepDefs.the_error_code_should_be_displayed(int)"
});
formatter.result({
  "duration": 251220,
  "status": "passed"
});
formatter.after({
  "duration": 6054468,
  "status": "passed"
});
});