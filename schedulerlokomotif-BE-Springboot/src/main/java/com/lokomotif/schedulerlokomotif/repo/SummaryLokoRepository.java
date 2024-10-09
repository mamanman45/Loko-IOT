package com.lokomotif.schedulerlokomotif.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.lokomotif.schedulerlokomotif.model.SummaryLoko;

public interface SummaryLokoRepository extends JpaRepository<SummaryLoko, String> {
    List<SummaryLoko> findAllByOrderByTimestampsDesc();
}
