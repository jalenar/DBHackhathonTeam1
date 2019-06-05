package com.dbwise_hackthon2019.careeradvise.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dbwise_hackthon2019.Model.CareerTopics;

@RestController
public class AdviseController implements InitializingBean{

	private Map<String, CareerTopics> topicList = new HashMap<>();
	private CareerTopics topic1 = new CareerTopics();
	private CareerTopics topic2 = new CareerTopics();
	private CareerTopics topic3 = new CareerTopics();
	private CareerTopics topic4 = new CareerTopics();
	private CareerTopics topic5 = new CareerTopics();
	
	AdviseController(){
	topic1.setTopicName("Certification Prep Recommendations");
	topic1.setTopicDesc("Expert recommentations on how to approach & prepare for exam");
	}
	
	 @RequestMapping(value = "/CareerAdvise", method = RequestMethod.GET)
	 public String hello() {
	      return "Hello World !";
	 }

	 @RequestMapping(value = "/Top5", method = RequestMethod.GET)
	 public ResponseEntity<Object> getTopics() {
		 
		 topic1.setTopicName("Certification Prep Recommendations");
		 topic1.setTopicDesc("Expert recommentations on how to approach & prepare for exam");
		 topic1.setTopicSubscribers(5);
		 
		 topic2.setTopicName("How to budget for 4 year college");
		 topic2.setTopicDesc("Seniors share their experiences & views on financial planning & budgeting");
		 topic2.setTopicSubscribers(15);
		 
		 topic3.setTopicName("Banking & Budgeting for teens");
		 topic3.setTopicDesc("Seniors share their experiences & views on financial planning & budgeting ");
		 topic3.setTopicSubscribers(12);
		 
		 topicList.put(topic2.getTopicName(), topic1);
		 topicList.put(topic2.getTopicName(), topic2);
		 topicList.put(topic3.getTopicName(), topic3);
		 
		 
	      return new ResponseEntity<>(topicList.values(), HttpStatus.OK);
	 }

	 
	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		
	}
	 
}
