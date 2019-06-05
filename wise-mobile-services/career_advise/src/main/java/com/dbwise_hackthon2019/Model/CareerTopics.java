package com.dbwise_hackthon2019.Model;

public class CareerTopics {

	private String topicName;
	private String topicDesc;
	private int topicSubscribers;
	public int getTopicSubscribers() {
		return topicSubscribers;
	}
	public void setTopicSubscribers(int topicSubscribers) {
		this.topicSubscribers = topicSubscribers;
	}
	public String getTopicName() {
		return topicName;
	}
	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}
	public String getTopicDesc() {
		return topicDesc;
	}
	public void setTopicDesc(String topicDesc) {
		this.topicDesc = topicDesc;
	}
}
