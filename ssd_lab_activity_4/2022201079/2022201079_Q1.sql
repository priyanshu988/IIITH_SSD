use CUSTOMER_DB;
delimiter //
CREATE PROCEDURE Sumoftwonum (
IN Var1 INT,IN Var2 INT, OUT var3 INT)
BEGIN 
select var1 + var2 INTO var3;
select var3 as sumof2num;
END//

delimiter ;

CALL Sumoftwonum (32,47,@res);

 