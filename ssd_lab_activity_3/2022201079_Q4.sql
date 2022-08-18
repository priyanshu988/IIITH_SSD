use COMPANY;
select D1.Dnumber, D2.Dname , D1.count_location from
(select Dnumber, count(*) as count_location from DEPT_LOCATIONS
where Dnumber in
(select Dnumber from DEPARTMENT where (Mgr_ssn in (select T.Essn from (
select Essn, count(SEX)as count_sex from DEPENDENT
where SEX ='F' 
group by Essn)as T where count_sex > 1)))group by Dnumber )as D1, DEPARTMENT as D2 where D1.Dnumber = D2.Dnumber;

