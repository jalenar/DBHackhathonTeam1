package com.db.wise.test.domain;

import java.util.List;

/*
 * a simple domain entity doubling as a DTO
 */

public class Questions {

    private long id;

    
    private String title;

    
    public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getOptions() {
		return options;
	}


	public void setOptions(String options) {
		this.options = options;
	}





	public String getTopicId() {
		return topicId;
	}


	public void setTopicId(String topicId) {
		this.topicId = topicId;
	}


	private String type;

    
    String options;

    
    private List<String> answers;
   
    
    private String topicId ;
    

      public Questions() {
    }


	public List<String> getAnswers() {
		return answers;
	}


	public void setAnswers(List<String> answers) {
		this.answers = answers;
	}

   }
