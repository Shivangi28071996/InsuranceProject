package com.tcs.CustomerInsuranceProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.service.InsuranceDetailService;

@RestController
public class InsuranceDetailController {
	
	@Autowired
	private InsuranceDetailService service;
	
	@GetMapping("/getAllCustomer")
	public List<CustomerInfo> getCustomerDetail() {	
		return service.getCustomerDetail();
	}
	
	@GetMapping("/getCustomerDetailById/{customerId}")
	public CustomerInfo getCustomerDetailById(@PathVariable("customerId") String customerId) {
		return service.getCustomerDetailById(customerId);
	}
	
	@DeleteMapping("/deleteCustomerAccount/{customerId}")
	public String deleteCustomerAccount(@PathVariable("customerId") String customerId ) {
		service.deleteCustomerAccount(customerId);
		return "Customer Account Deactivate Successfully";
	}
}
