package com.theironyard.services;

import com.theironyard.entities.Statement;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Troy on 11/17/16.
 */
public interface StatementRepository extends CrudRepository<Statement,Integer> {
}
