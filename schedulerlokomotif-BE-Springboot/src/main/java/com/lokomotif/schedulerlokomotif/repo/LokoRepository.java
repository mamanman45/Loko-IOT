package com.lokomotif.schedulerlokomotif.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.lokomotif.schedulerlokomotif.model.Loko;

public interface LokoRepository extends MongoRepository<Loko, String> {
    
}
