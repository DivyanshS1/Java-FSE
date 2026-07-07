package com.div.EmployeeManagementSystem.repository;

import com.div.EmployeeManagementSystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByDepartmentId(Long departmentId);

    // Custom Query using @Query
    @Query("SELECT e FROM Employee e WHERE e.email LIKE %?1%")
    List<Employee> searchByEmail(String keyword);

    // Named Queries
    List<Employee> findByName(String name);

    Employee findByEmail(String email);
}