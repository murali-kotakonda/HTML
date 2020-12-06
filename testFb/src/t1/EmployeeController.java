package t1;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EmployeeController {

	@RequestMapping(value="/hello")
	public String getMsg(){
		return "response";//jsp file name
	}
	
	//
	@RequestMapping(value="/getDate")
	public ModelAndView showDate(){
		ModelAndView m = new ModelAndView("showDate");// specify jsp name
		//response data
		m.addObject("msg","Request success");
		
		Date d = new Date();
		SimpleDateFormat  format= new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String dateValue = format.format(d);
		m.addObject("date",dateValue);

		return m;
	}
	
	@RequestMapping(value="/requestData" , method=RequestMethod.GET)
	public ModelAndView getReqData(
			@RequestParam("uName") String name,
			@RequestParam("age") int  age,
			@RequestParam("sal") float sal
			){
		ModelAndView m = new ModelAndView("responseData");// specify jsp name
		
		m.addObject("msg","Request success for get call");
		m.addObject("myName", name);
		m.addObject("myAge", age);
		m.addObject("mySal", sal);
		return m;
	}
	
	@RequestMapping(value="/requestData" , method=RequestMethod.POST)
	public ModelAndView postReqData(
			@RequestParam("uName") String name,
			@RequestParam("age") int  age,
			@RequestParam("sal") float sal
			){
		ModelAndView m = new ModelAndView("responseData");// specify jsp name
		
		m.addObject("msg","Request success for post call");
		m.addObject("myName", name);
		m.addObject("myAge", age);
		m.addObject("mySal", sal);
		return m;
	}
}
