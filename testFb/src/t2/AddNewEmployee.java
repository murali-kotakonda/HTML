package t2;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class AddNewEmployee extends Base{

	@Test
	public void Testcase2() throws InterruptedException {
		WebElement Employee = driver.findElement(By.id("EmployeeLbl"));
		Actions action = new Actions(driver);
		 action.moveToElement(Employee).build().perform();
		 Thread.sleep(3000);
		 driver.findElement(By.linkText("Add New Employee")).click();
		 Thread.sleep(2000);
	}

}
