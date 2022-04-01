package com.PAMEDIA.test.StepDefinitions.api;

import com.PAMEDIA.test.framework.CommonMethods.APICommonMethods;
import com.PAMEDIA.test.framework.Helpers.GetResponse;
import com.PAMEDIA.test.framework.hooks.Screenshot.SetAPI;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.Assert;

public class WeatherDateLocationStepDefs {

    private Response response;
    private String woeid;

    @Given("^user is on the base URI$")
    public void user_is_on_the_base_URI() throws Throwable {
        RestAssured.baseURI = SetAPI.getBaseURL();
    }

    @When("^the user searches with the location \"([^\"]*)\"$")
    public void the_user_searches_with_the_location(String locationName) throws Throwable {
        response = GetResponse.getLocationID(locationName);
        woeid = response.jsonPath().getString("woeid").replace("[", "").replace("]", "");
    }

    @When("^send the request to fetch the weather report for the date \"([^\"]*)\"$")
    public void send_the_request_to_fetch_the_weather_report_for_the_date(String date) throws Throwable {
        response = GetResponse.getWeatherDetails(woeid, date);
    }

    // Assertion ("Then" condition from the request url) of the expected result
    @Then("^the valid response for the selected location and date should be return$")
    public void the_valid_response_for_the_selected_location_and_date_should_be_return() throws Throwable {
        Assert.assertTrue(APICommonMethods.countArrays(response));
    }

    // Assertion ("Then" condition from the request url) of the expected result
    @Then("^the success code (\\d+) along with all the available users and the correct response headers should be displayed$")
    public void the_success_code_along_with_all_the_available_users_and_the_correct_response_headers_should_be_displayed(int code) throws Throwable {
        Assert.assertEquals(APICommonMethods.extractStatusCode(response), code);
        Assert.assertEquals(APICommonMethods.getContentType(response), "Content-Type=application/json");
    }

    @When("^the user sends the get request for the locations longitude \"([^\"]*)\" and latitude \"([^\"]*)\" to fetch all the users$")
    public void the_user_sends_the_get_request_for_the_locations_longitude_and_latitude_to_fetch_all_the_users(String latitude, String longitude) throws Throwable {
        response = GetResponse.getWOEID_Latt_Long(latitude, longitude);
    }

    // Assertion ("Then" condition from the request url) of the expected result
    @Then("^the error code \"([^\"]*)\" should be displayed$")
    public void the_error_code_should_be_displayed(int errorcode) throws Throwable {
        Assert.assertEquals(APICommonMethods.extractStatusCode(response), errorcode);
    }
}
