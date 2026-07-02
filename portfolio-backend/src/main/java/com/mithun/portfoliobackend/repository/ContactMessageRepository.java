package com.mithun.portfoliobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mithun.portfoliobackend.entity.ContactMessage;

public interface ContactMessageRepository extends JpaRepository<ContactMessage,Long>{
     
}
