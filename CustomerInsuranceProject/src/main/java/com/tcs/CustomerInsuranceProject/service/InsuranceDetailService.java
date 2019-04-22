package com.tcs.CustomerInsuranceProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.CustomerInsuranceProject.model.CustomerInfo;
import com.tcs.CustomerInsuranceProject.repository.CustomerInsuranceRepository;
/*import com.tcs.CustomerInsuranceProject.repository.InsuranceDetailRepository;*/

@Service
public class InsuranceDetailService {
	@Autowired
	private CustomerInsuranceRepository customerRepository;
	
	/*@Autowired
	private InsuranceDetailRepository insuranceRepository;*/
	
	public List<CustomerInfo> getCustomerDetail() {
		return customerRepository.findAll();
	}

	public CustomerInfo getCustomerDetailById(String customerId) {
		Optional<CustomerInfo> customerDetail = customerRepository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		return customerInfo;
	}

	public void deleteCustomerAccount(String customerId) {
		Optional<CustomerInfo> customerDetail = customerRepository.findById(customerId);
		CustomerInfo customerInfo = customerDetail.get();
		customerRepository.delete(customerInfo);
	}
}
