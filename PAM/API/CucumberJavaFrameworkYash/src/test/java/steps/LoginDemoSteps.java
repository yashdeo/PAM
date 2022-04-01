package steps;

import Pages.Homepage_PF;
import Pages.LoginPage;
import Pages.LoginPage_PageFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class LoginDemoSteps {

    LoginPage_PageFactory loginPage_pageFactory;
    Homepage_PF homepage_pf;

    WebDriver driver = null;

    @Given("Browser is open")
    public void browser_is_open() {


        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
        driver.manage().window().maximize();

        System.out.println("browser open");
    }

    @Given("User is on the Login Page")
    public void user_is_on_the_Login_Page() {
        driver.navigate().to("https://example.testproject.io/web/");
    }

/*    @When("User enters user name and password")
    public void user_enters_user_name_and_password() {
        loginPage = new LoginPage(driver);
        loginPage.enterUserName("yasha","12345");
    }*/

    @When("User enters user name and password")
    public void user_enters_user_name_and_password() {
        loginPage_pageFactory = new LoginPage_PageFactory(driver);
        loginPage_pageFactory.enterUserNames("yasha", "12345");
    }

    @Then("User navigates to the home page")
    public void user_navigates_to_the_home_page() {
        homepage_pf = new Homepage_PF(driver);
        Assert.assertTrue(homepage_pf.isButtonDisplayed());
        driver.close();
        driver.quit();
    }


}
