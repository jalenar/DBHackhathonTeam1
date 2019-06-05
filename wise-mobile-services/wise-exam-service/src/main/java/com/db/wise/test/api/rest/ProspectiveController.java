package com.db.wise.test.api.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.db.wise.test.domain.Questions;
import com.db.wise.test.domain.Topics;
import com.db.wise.test.service.ExamService;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/wise/v1")
@Api(tags = {"wise"})
public class ProspectiveController extends AbstractRestHandler {

    @Autowired
    private ExamService examService;

   
    @RequestMapping(value = "Questions",
            method = RequestMethod.GET)
            //produces = {MediaType.APPLICATION_JSON_VALUE})

    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Get a Questions .", notes = "")
    public
    @ResponseBody
    List<Questions> getQuestions(@ApiParam(value = "", required = true)
                                    
                                      HttpServletRequest request, HttpServletResponse response) {
        return this.examService.getQuestions();
    }
    
    @RequestMapping(value = "Topics",
            method = RequestMethod.GET)
            //produces = {"application/json", "application/xml"})
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Get a Topics list ", notes = "")
    public
    @ResponseBody
    List<Topics> getTopics(@ApiParam(value = "", required = true)
                                    
                                      HttpServletRequest request, HttpServletResponse response) {
        return this.examService.getTopics();
    }


  }
