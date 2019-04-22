package com.tcs.CustomerInsuranceProject.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.CustomerInsuranceProject.model.CustomerAddress;
import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.CustomerInsurance;
import com.tcs.CustomerInsuranceProject.service.CustomerInsuranceService;

@RestController
public class CustomerInsuranceController {
	
	@Autowired
	private CustomerInsuranceService service;
	
	@PostMapping("/createCustomer")
	public String addCustomerInfo() {
		CustomerAddress address= new CustomerAddress("New Delhi","Delhi",110035);
		ArrayList<CustomerInsurance> insuranceList = new ArrayList<CustomerInsurance>();
		CustomerInsurance insurance = new CustomerInsurance("ins1234", "vehicle", "Car", 1,25000, "Anju", "mother");
		insuranceList.add(insurance);
		CustomerInfo customerInfo=new CustomerInfo("cust152", "Anuj" , "male", 222222222, 222222222, "31-08-92",
				"Professor", 400000, "ANSJ123", "Indian", "anuj@gmail.com", "abc123","Unmarried", "Active",address,insuranceList);
		service.addCustomerInfo(customerInfo);
		return "Customer added successfully";
	}

	@PutMapping("/addInsurance/{customerId}")
	public String addInsuranceToCustomer(@PathVariable("customerId") String customerId ) {
		CustomerInsurance insurance = new CustomerInsurance("ins1214", "Property", "Home", 5,2500000, "Anuj", "Brother");
		service.addInsuranceToCustomer(customerId,insurance);
		return "Insurance added succesfully";
	}
	
	@DeleteMapping("/deActivateCustomerAccount/{customerId}")
	public String deActivateCustomerAccount(@PathVariable("customerId") String customerId ) {
		service.deActivateCustomerAccount(customerId);
		return "Customer Account Deactivate Successfully";
	}
	
	
}
	

	
	
	

