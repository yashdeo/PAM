package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Loginsteps {

    @When("User enters password and user name")
    public void user_enters_password_and_user_name() {
        System.out.println("4");
    }

    @When("Click login")
    public void click_login() {
        System.out.println("3");
    }

    @Then("home page should be displayed")
    public void home_page_should_be_displayed() {
        System.out.println("2");
    }

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println("1");
    }



}
