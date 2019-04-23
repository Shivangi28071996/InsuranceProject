package com.tcs.CustomerInsuranceProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.CustomerInsuranceProject.model.CustomerAddress;
import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.InsuranceDetail;
import com.tcs.CustomerInsuranceProject.service.InsuranceDetailService;

@RestController
public class InsuranceDetailController {
	
	@Autowired
	private InsuranceDetailService service;
	
	/*Customer Related Operation*/	
	
	@GetMapping("/getAllCustomer")
	public List<CustomerInfo> getCustomerDetail() {	
		return service.getCustomerDetail();
	}
	
	@GetMapping("/getCustomerDetailById/{customerId}")
	public CustomerInfo getCustomerDetailById(@PathVariable("customerId") String customerId) {
		return service.getCustomerDetailById(customerId);
	}
	
	@PutMapping("/updateCustomerDetailByAdministrator/{customerId}")
	public String updateCustomerDetailByCustomer(@PathVariable("customerId") String customerId ) {
		CustomerAddress address= new CustomerAddress("New Delhi","Delhi",110035);
		CustomerInfo customerInfo=new CustomerInfo("Shailendra" , 222222222, 222222222,
				"Developer", 500000, "shailendra@gmail.com", "abc123","Married",address);
		service.updateCustomerDetailByCustomer(customerId,customerInfo);
		return "Details updated succesfully";
	}
	
	@DeleteMapping("/deleteCustomerAccount/{customerId}")
	public String deleteCustomerAccount(@PathVariable("customerId") String customerId ) {
		service.deleteCustomerAccount(customerId);
		return "Customer Account Delete Successfully";
	}
	
	/*Insurance Related Operation*/	
	
	@GetMapping("/getAllInsuranceDetails")
	public List<InsuranceDetail> getAllInsuranceDetails() {	
		return service.getAllInsuranceDetails();
	}
	
	@PostMapping("/createNewInsurance")
	public String createNewInsurance() {
		InsuranceDetail insuranceDetail=new InsuranceDetail("insurance001", "Vehicle Insurance" , 
										"Four Wheeler", 1,24004);
		service.createNewInsurance(insuranceDetail);
		return "Insurance Added to the list";
	}
	
	@PutMapping("/updateInsuranceDetail/{insuranceId}")
	public String updateInsuranceDetail(@PathVariable("insuranceId") String insuranceId ) {
		InsuranceDetail insuranceDetail=new InsuranceDetail(1,25234);
		service.updateInsuranceDetail(insuranceId,insuranceDetail);
		return "Insurance updated succesfully";
	}
	
	@DeleteMapping("/deleteInsuranceDetail/{insuranceId}")
	public String deleteInsuranceDetail(@PathVariable("insuranceId") String insuranceId ) {
		service.deleteInsuranceDetail(insuranceId);
		return "Insurance Deleted Successfully";
	}
	
}
