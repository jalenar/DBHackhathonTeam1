package com.db.wise.test.api.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.db.wise.test.domain.Questions;

import com.db.wise.test.service.ExamService;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/wise/v1/Questions")
@Api(tags = {"wise"})
public class ProspectiveController extends AbstractRestHandler {

    @Autowired
    private ExamService examService;

   
    @RequestMapping(value = "",
            method = RequestMethod.GET,
            produces = {"application/json", "application/xml"})
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Get a Questions list of all hotels.", notes = "The list is paginated. You can provide a page number (default 0) and a page size (default 100)")
    public
    @ResponseBody
    List<Questions> getQuestions(@ApiParam(value = "The page number (zero-based)", required = true)
                                    
                                      HttpServletRequest request, HttpServletResponse response) {
        return this.examService.getQuestions();
    }

  }
