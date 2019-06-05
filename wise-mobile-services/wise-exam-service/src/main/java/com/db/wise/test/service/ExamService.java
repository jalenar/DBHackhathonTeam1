package com.db.wise.test.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
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
		List<Questions> questionObjects = new ArrayList<>();
		try {
			BufferedReader reader = new BufferedReader(new FileReader(getClass().getClassLoader().getResource("./questions.csv").getFile()));
			String line;
			List<List<String>> questionsList = new ArrayList<>();

			while ((line = reader.readLine()) != null) {
				List<String> question = Arrays.asList(line.split(","));
				questionsList.add(question);
			}

			for (List<String> question : questionsList) {
				if(!question.get(0).toString().equalsIgnoreCase("id")) {
					Questions qt = new Questions();
					qt.setId(Long.parseLong(question.get(0)));
					qt.setTitle(question.get(1));
					qt.setTopicId(question.get(2));
					qt.setType(question.get(3));
					qt.setOptions(Arrays.asList(question.get(4).split("!")));
					qt.setAnswers(Arrays.asList(question.get(5).split("!")));
					qt.setPoints(Integer.parseInt(question.get(6)));
					questionObjects.add(qt);
				}
			}
			reader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return questionObjects;
	}



	public List<Topics> getTopics() {
		List<Topics> topicObjects = new ArrayList<>();
		try {
			BufferedReader reader = new BufferedReader(new FileReader(getClass().getClassLoader().getResource("./topics.csv").getFile()));
			String line;
			List<List<String>> topicsList = new ArrayList<>();

			while ((line = reader.readLine()) != null) {
				List<String> topic = Arrays.asList(line.split(","));
				topicsList.add(topic);
			}

			for (List<String> topic : topicsList) {
				if(!topic.get(0).toString().equalsIgnoreCase("topicId")) {
					Topics tpc = new Topics();
					tpc.setId(Long.parseLong(topic.get(0)));
					tpc.setName(topic.get(1));
					topicObjects.add(tpc);
				}
			}
			System.out.println(topicObjects);
			reader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return topicObjects;
	}

   
}
