USE CUSTOMER_DB;
DELIMITER //
CREATE PROCEDURE SelectAllCustomers(IN city varchar(40))
BEGIN
SELECT CUST_NAME from customer where WORKING_AREA = city;
END //
DELIMITER ;

CALL SelectAllCustomers('Bangalore');