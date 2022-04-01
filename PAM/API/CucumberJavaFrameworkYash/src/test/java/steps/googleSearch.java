package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class googleSearch {

    WebDriver driver = null;

  /*  @Given("Browser is open")
    public void browser_is_open() {

        System.setProperty("webdriver.chrome.driver","src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
        driver.manage().window().maximize();

        System.out.println("browser open");
    }*/

    @And("User is on the search page")
    public void user_is_on_the_search_page() {

        driver.navigate().to("https://www.bing.com/");
    }

    @When("user enters a search criteria")
    public void user_enters_a_search_criteria() {
        driver.findElement(By.name("q")).sendKeys("Selenium Automation");
        driver.findElement(By.name("q")).sendKeys(Keys.ENTER);

    }

    @Then("the results should be displayed")
    public void the_results_should_be_displayed() {
        System.out.println("displayed results");
        driver.getPageSource().contains("Selenium");

        driver.close();
        driver.quit();
    }

}
