package com.mithun.portfoliobackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mithun.portfoliobackend.entity.ContactMessage;
import com.mithun.portfoliobackend.service.ContactMessageService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins="*")
public class ContactMessageController {
         private final ContactMessageService contactMessageService;

		 public ContactMessageController(ContactMessageService contactMessageService) {
		
			this.contactMessageService = contactMessageService;
		 }
      
        @PostMapping 
        public ResponseEntity<String>saveContactMessage(
        		@RequestBody ContactMessage contactMessage){
        	
        	contactMessageService.saveMessage(contactMessage);
        	
        	return ResponseEntity.status(HttpStatus.CREATED).body("Message sent Successfully");
        	
        }
}
