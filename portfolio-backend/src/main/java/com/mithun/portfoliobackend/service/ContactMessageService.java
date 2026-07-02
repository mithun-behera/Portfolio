package com.mithun.portfoliobackend.service;

import org.springframework.stereotype.Service;

import com.mithun.portfoliobackend.entity.ContactMessage;
import com.mithun.portfoliobackend.repository.ContactMessageRepository;

@Service
public class ContactMessageService {
    
	private final ContactMessageRepository contactMessageRepositry;

	public ContactMessageService(ContactMessageRepository contactMessageRepositry) {
		
		this.contactMessageRepositry = contactMessageRepositry;
	}
	
	public ContactMessage saveMessage(ContactMessage contactMessage) {
		return contactMessageRepositry.save(contactMessage);
		
	}
	
}
