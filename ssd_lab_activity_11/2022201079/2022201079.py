import csv



l = []
with open("./lab_11_data.csv", 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        l.append(row)

# Question 1(i): Read the CSV File Provided & drop the last 6 columns .

list1 = []
for row in l:
    list1.append(row[0:len(row)-6])


#Question 1(ii): Drop all the rows with negative %change of more than 3% using filter & lambda function.
# del list1[0]
func = lambda x: False if float(x[-1])< -3 else True
list2 = []
list2 = list(filter(func,list1[1:]))

# for row in list2:
#     print(row)
# print(len(list(list2)))
#Question 1(iii): Calculate average of Open, high, low for all the remaining columns using map & lambda function.

with open('avg_output.txt', 'w') as avgOutputFile:
    openAvg = [ i[1].replace(",", "") for i in list2]
    openAvg = list(map(float, openAvg))

    highAvg = [ i[2].replace(",", "") for i in list2]
    highAvg = list(map(float, highAvg))

    lowAvg = [ i[3].replace(",", "") for i in list2]
    lowAvg = list(map(float, lowAvg))
    
    avgopen = lambda x: sum(x)/len(x)
    
    avgOutputFile.write(str(avgopen(openAvg)) + "\n")
    avgOutputFile.write(str(avgopen(highAvg)) + "\n")
    avgOutputFile.write(str(avgopen(lowAvg)) + "\n")

# print(row_sum)

#Question 1(iv): Given character A-Z, design a feature such that all the stocks starting with any specific alphabet should be displayed.
#Question 1(v): Write the data in stock_output.txt.

with open('stock_output.txt', 'w') as fileOutput:
    inputStr = input("Enter Input: ")
    for i in list2:
        if (i[0][0] == inputStr.upper()):
            for j in i:
                fileOutput.write(str(j) + " ")
            fileOutput.write("\n")
