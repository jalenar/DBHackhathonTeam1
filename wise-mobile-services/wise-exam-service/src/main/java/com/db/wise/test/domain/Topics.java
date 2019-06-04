package com.db.wise.test.domain;



/*
 * a simple domain entity doubling as a DTO
 */

public class Topics {

    private long id;

    
    private String Name;

    
   
      public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getName() {
		return Name;
	}



	public void setName(String name) {
		Name = name;
	}



	public Topics() {
    }

   }
