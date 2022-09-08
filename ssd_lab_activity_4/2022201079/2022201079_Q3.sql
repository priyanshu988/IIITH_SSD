USE CUSTOMER_DB;
DELIMITER //
CREATE PROCEDURE SelectCustomersAndGrades()
BEGIN
select T.CUST_NAME , P.GRADE from customer as P, (SELECT CUST_NAME, sum(OPENING_AMT) as opensum ,sum(RECEIVE_AMT) as receivesum
FROM customer
group by CUST_NAME) as T where T.CUST_NAME = P.CUST_NAME and opensum + receivesum > 10000 ;
END //
DELIMITER ;
CALL SelectCustomersAndGrades();