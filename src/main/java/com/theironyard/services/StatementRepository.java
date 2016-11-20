package com.theironyard.services;

import com.theironyard.entities.Statement;
import com.theironyard.entities.User;
import org.springframework.context.support.StaticMessageSource;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Troy on 11/17/16.
 */
public interface StatementRepository extends CrudRepository<Statement,Integer> {
    Statement findByUserId(int id);
}
