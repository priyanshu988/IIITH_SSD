use COMPANY;
select T2.Mgr_ssn, T2.Dnumber, T1.count_dependent from
(select Essn, count(*) as count_dependent from DEPENDENT where Essn in
(select Mgr_ssn from DEPARTMENT where Dnumber in
(select T.Dnumber from
(select Dnumber, count(*) as count_location from DEPT_LOCATIONS group by Dnumber) as T where count_location > 1))group by Essn)as T1, DEPARTMENT as T2 where T1.Essn = T2.Mgr_ssn;