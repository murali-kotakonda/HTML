package t2;

import static t1.Commons.LOGIN;
import static t1.Commons.LOGIN_NAME;
import static t1.Commons.*;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import t1.Commons;

public class Base {

	public WebDriver driver;

	@Before
	public void everyTime() throws InterruptedException {
		driver = Commons.getDriver();
		driver.get(Commons.BASE_URL);
		Login("admin", "admin");
	}

	@After
	public void afterEveryTest() {
		logout();
		driver.close();
	}

	private void Login(String userName, String pass) throws InterruptedException {
		WebElement username = driver.findElement(By.name(LOGIN_NAME));
		WebElement Pwd = driver.findElement(By.name(PASSWORD));
		WebElement LoginButton = driver.findElement(By.name(LOGIN));
		Commons.checkenabledAndDisplayed(username, Pwd, LoginButton);
		username.sendKeys(userName);
		Pwd.sendKeys(pass);
		Thread.sleep(2000);
		LoginButton.submit();
	}

	private void logout() {
		WebElement logout = driver.findElement(By.name("logoutLbl"));
		logout.click();
		String url3 = BASE_URL+ "logout";
		Assert.assertEquals("Logout is not successful", url3, driver.getCurrentUrl());
		
		WebElement username = driver.findElement(By.name(LOGIN_NAME));
		WebElement Pwd = driver.findElement(By.name(PASSWORD));
		WebElement LoginButton = driver.findElement(By.name(LOGIN));
		Commons.checkenabledAndDisplayed(username, Pwd, LoginButton);
	}

}
