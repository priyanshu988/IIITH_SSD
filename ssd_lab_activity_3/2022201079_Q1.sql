use COMPANY;
select CONCAT(E1.Fname,' ', E1.Minit, ' ', E1.Lname) as Full_name, E1.Ssn, D1.Dnumber, D1.Dname
FROM EMPLOYEE AS E1, DEPARTMENT as D1 where (E1.Ssn IN 
(select Mgr_ssn from DEPARTMENT
where(Dnumber in (select Dno from EMPLOYEE where(Ssn in (select T.Essn from 
(select Essn, sum(Hours) as Total_Hours from WORKS_ON group by Essn having Total_Hours<40 OR Total_Hours is NULL)as T)))))) and E1.Ssn = D1.Mgr_ssn;