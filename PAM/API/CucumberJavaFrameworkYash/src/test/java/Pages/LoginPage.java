package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
    WebDriver driver;

    public LoginPage(WebDriver driver){
    this.driver = driver;
    }


    private By txtUserName = By.id("name");
    private By password = By.id("password");
    private By buttonLogin = By.id("login");

    public void enterUserName(String userName, String passwords){
        driver.findElement(txtUserName).sendKeys(userName);
        driver.findElement(password).sendKeys(passwords);
        driver.findElement(buttonLogin).click();
    }


}
