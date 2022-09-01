USE CUSTOMER_DB;

DELIMITER //
create procedure explicitcursor()
BEGIN
declare nme VARCHAR(30);
declare city VARCHAR(30);
declare cont VARCHAR(30);
declare g DECIMAL;
declare var1 int default 0;
declare cur cursor for select CUST_NAME, CUST_CITY,CUST_COUNTRY,GRADE from customer where AGENT_CODE like 'A00%';
declare continue handler for not found set var1=1;
open cur;
cust_details:loop
fetch cur into nme, city, cont, g;
select nme, city, cont, g;
if var1=1 then
leave cust_details;
end if;
end loop cust_details;
END //
DELIMITER ;

CALL explicitcursor;
