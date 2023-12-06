package com.example.demo;

import com.google.cloud.spring.data.datastore.repository.DatastoreRepository;


/**
 * @Description:
 * @ClassName: UserRepository
 * @Package: com.example.demo
 * @Author: Junpeng Li
 * @CreateTime: 11/19/23 12:13 AM
 */
public interface UserRepository extends DatastoreRepository<User, Long> {
    User findByUserId(String userId);

}