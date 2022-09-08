use CUSTOMER_DB;
DELIMITER //
CREATE PROCEDURE SelectAllCustomers (IN city varchar(30))
BEGIN
SELECT CUST_NAME FROM customer WHERE WORKING_AREA = city;
END //
DELIMITER ;
CALL SelectAllCustomers('Bangalore');
