package com.div.EmployeeManagementSystem.repository;

import com.div.EmployeeManagementSystem.entity.Employee;
import com.div.EmployeeManagementSystem.projection.EmployeeDTO;
import com.div.EmployeeManagementSystem.projection.EmployeeView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Interface-based Projection
    List<EmployeeView> findBy();

    // Class-based Projection using constructor expression
    @Query("SELECT new com.div.EmployeeManagementSystem.projection.EmployeeDTO(e.name, e.email) FROM Employee e")
    List<EmployeeDTO> getEmployeeDTOs();
}