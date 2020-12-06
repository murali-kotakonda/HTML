package t1;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TestFb {
	private static WebDriver driver;
	@Before
	public void everyTime() {
		driver = Commons.getDriver();
		driver.get(Commons.BASE_URL + "/loginpage.html");
	}

	@After
	public void afterEveryTest() {
		driver.close();
	}

	@org.junit.Test
	public void Testcase1() throws InterruptedException {
		clickLogin("", "");
		Thread.sleep(1000);

		Alert alert = driver.switchTo().alert();
		Thread.sleep(5000);

		String alertMessage = alert.getText();
		String message = "Please provide loginName!";

		Assert.assertEquals("Invalid popup message", message, alertMessage);
		alert.accept();
	}

	@Test
	public void Testcase2() throws InterruptedException {
		clickLogin("savita", "");
		Thread.sleep(1000);

		Alert alert = driver.switchTo().alert();
		Thread.sleep(5000);
		String alertMessage = alert.getText();
		String message = "Please provide Password!";
		Assert.assertEquals("Popup is invalid", message, alertMessage);
		alert.accept();
	}

	@Test
	public void Testcase3() throws InterruptedException {
		clickLogin("", "xxxert");
		Thread.sleep(1000);

		Alert alert = driver.switchTo().alert();
		Thread.sleep(5000);
		String alertMessage = alert.getText();
		String message = "Please provide loginName!";
		Assert.assertEquals("Popup is invalid", message, alertMessage);
		alert.accept();
	}

	@Test
	public void Testcase4() throws InterruptedException {
		clickLogin("savita", "xxx");
		Thread.sleep(1000);

		Alert alert = driver.switchTo().alert();
		Thread.sleep(5000);
		String alertMessage = alert.getText();
		String message = "password has to be minimum 5 chars and max 10 chars!";
		Assert.assertEquals("Popup is invalid", message, alertMessage);
		alert.accept();
	}

	@Test
	public void Testcase5() throws InterruptedException {
		clickLogin("savita", "yyyyyy");
		Thread.sleep(1000);
	}

	private void clickLogin(String userName, String pass) throws InterruptedException {
		WebElement username = driver.findElement(By.name(LOGIN_NAME));
		WebElement Pwd = driver.findElement(By.name(PASSWORD));
		WebElement LoginButton = driver.findElement(By.name(LOGIN));
		Commons.checkenabledAndDisplayed(username, Pwd, LoginButton);
		username.sendKeys(userName);
		Pwd.sendKeys(pass);
		Thread.sleep(2000);
		LoginButton.submit();
	}
}
