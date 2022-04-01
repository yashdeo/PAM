package steps;

import io.cucumber.java.After;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class HooksDemoSteps {

     WebDriver driver = null;

     @Before
     public void browserSetUp(){
         System.out.println("Inside the browser setup");
         System.setProperty("webdriver.chrome.driver","src/test/resources/drivers/chromedriver.exe");
         driver = new ChromeDriver();
         driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
         driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
         driver.manage().window().maximize();
     }

     @After
     public void tearDown(){
         System.out.println("Tear down methos");
         driver.manage().deleteAllCookies();
         driver.close();
         driver.quit();
     }

    @Given("User is on the Login Page for hooks demo")
    public void user_is_on_the_Login_Page_for_hooks_demo() {

    }

    @When("user enters login name and password and login")
    public void user_enters_login_name_and_password_and_login() {

    }

    @Then("Home page should be displayed")
    public void home_page_should_be_displayed() {

    }

}
