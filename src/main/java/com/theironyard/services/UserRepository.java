package com.theironyard.services;

import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Troy on 11/16/16.
 */
public interface UserRepository extends CrudRepository<User,Integer> {
    User findFirstByUsername(String username);
}
