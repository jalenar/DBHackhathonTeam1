package com.db.wise.test.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;

import com.db.wise.test.domain.Questions;
import com.db.wise.test.domain.Topics;

/*
 * Sample service to demonstrate what the API would use to get things done
 */
@Service
public class ExamService {

    private static final Logger log = LoggerFactory.getLogger(ExamService.class);

   
   
   
    public ExamService() {
    }




	public List<Questions> getQuestions() {
		// TODO Auto-generated method stub
		List <Questions> questions= new ArrayList<Questions>();
		Questions question = new Questions();
		question.setId(111111);
		questions.add(question);
		
		return questions;
	}




	public List<Topics> getTopics() {
		List <Topics> topics= new ArrayList<Topics>();
		Topics topic =new Topics();
				topic.setId(1);
		topics.add(topic);
		return topics;
	}

   
}
