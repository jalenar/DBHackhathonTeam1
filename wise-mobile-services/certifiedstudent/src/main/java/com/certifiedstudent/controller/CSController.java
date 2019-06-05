package com.certifiedstudent.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.certifiedstudent.model.CStudent;
import com.certifiedstudent.model.Forum;

@RestController
public class CSController implements InitializingBean {

	private ArrayList<Forum> studentArray;
	
	@CrossOrigin
	@GetMapping("/forum")
	public ArrayList<Forum> getCStudent() {
		return studentArray;
	}

	public void afterPropertiesSet() throws Exception {
		this.studentArray = new ArrayList<Forum>();
		Forum forum1 = new Forum();
		forum1.setTitle("Something you have later regretted spending money on.");
		forum1.setDescription("Explain any particular thing you have spent money on , you have later regretted spending money on");
	    List<String> comments = new ArrayList<String>();
	    comments.add("clothes");
	    comments.add("travel");
	    comments.add("restaurants");
	    forum1.setComments(comments);
	    forum1.setUpvotes(3);
	    forum1.setDownvotes(0);
	    this.studentArray.add(forum1);
	    
	    Forum forum2 = new Forum();
		forum2.setTitle("Invest money in 401k from the beginning of your career");
		forum2.setDescription("Should one invest money in 401k from the beginning of your career");
	    List<String> comments1 = new ArrayList<String>();
	    comments1.add("Yes,Only if you dont have a student loan.");
	    comments1.add("Nope , I would suggest not to invest for the first 5 years irrespective of your debt situation.");
	    comments1.add("Yes , one should invest the percentage matched by the employer in the first few years , if one does not have a student loan.");
	    forum2.setComments(comments);
	    forum2.setUpvotes(3);
	    forum2.setDownvotes(2);
	    this.studentArray.add(forum2);
	    
	    Forum forum3 = new Forum();
	  		forum3.setTitle("Student loan or credit card debt? which one should be tackled first and why?");
	  		forum3.setDescription("If one has student loan and credit card debt , which one should try to pay off first?");
	  	    List<String> comments2 = new ArrayList<String>();
	  	    comments2.add("Student loan.");
	  	    comments2.add("Make minimum payments on both.");
	  	    comments2.add("Credit card debt");
	  	    forum3.setComments(comments);
	  	    forum3.setUpvotes(5);
	  	    forum3.setDownvotes(2);
	  	    this.studentArray.add(forum3);
		
	}
	
}
