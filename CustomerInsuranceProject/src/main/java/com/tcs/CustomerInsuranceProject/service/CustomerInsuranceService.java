package com.tcs.CustomerInsuranceProject.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.model.CustomerInsurance;
import com.tcs.CustomerInsuranceProject.repository.CustomerInsuranceRepository;

@Service
public class CustomerInsuranceService {
	
	@Autowired
	private CustomerInsuranceRepository repository;
	
	public void addCustomerInfo(CustomerInfo customerInfo) {
		repository.save(customerInfo);
	}

	public void addInsuranceToCustomer(String customerId, CustomerInsurance insurance) {
		Optional<CustomerInfo> customerDetail = repository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		ArrayList<CustomerInsurance> insuranceDetail=customerInfo.getCustomerInsurance();
		insuranceDetail.add(insurance);
		customerInfo.setCustomerInsurance(insuranceDetail);
		repository.save(customerInfo);
	}

	public void deActivateCustomerAccount(String customerId) {
		Optional<CustomerInfo> customerDetail = repository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		customerInfo.setStatus("Deactivate");
		repository.save(customerInfo);
	}
	
	
	
}
