package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage_PageFactory {
    WebDriver driver;

    public LoginPage_PageFactory(WebDriver driver){
    this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy(id = "name")
    private WebElement txtUserNamePF;

    @FindBy(id = "password")
    private WebElement passwordPF;

    @FindBy(id = "login")
    private WebElement buttonLoginPF;


    public void enterUserNames(String userName, String passwords){
        txtUserNamePF.sendKeys(userName);
        passwordPF.sendKeys(passwords);
        buttonLoginPF.click();
    }


}
