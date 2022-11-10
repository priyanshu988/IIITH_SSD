from datetime import datetime


format = "%H:%M:%S.%f"
filename = input("Enter the txt File name: ")
f = open(filename)
file1 = f.readlines()

listInput = []

for ind in file1:
    listInput.append(ind.split("\t"))

column1 = 0
rownumber = 0
tempStr = ""

rowCount = 0
tempCounter = 0
flag = False
for ind in listInput:
    if (ind[0] == "\n"):
        tempCounter = 0
        continue
    else:
        for ind2 in range(1, len(ind)):
            if (ind[ind2] != "0" and ind[ind2] != "\n"):
                column1 = ind2
                rownumber = tempCounter
                flag = True
                break
        if (flag):
            tempStr = ind[0]
            break
        tempCounter += 1
    rowCount += 1

for ind in listInput[rowCount:]:
    if (ind[0] == "\n"):
        break
    else:
        rowCount += 1

rownumber2 = 0
tempStr2 = ""
for ind in listInput[rowCount:]:
    if (ind[0] != "\n"):
        if (ind[column1] != "0" and tempCounter < rownumber):
            rownumber2 = tempCounter
            tempStr2 = ind[0]
            break
        tempCounter += 1
    else:
        tempCounter = 0
        continue


tempStr = datetime.strptime(tempStr, format)
tempStr2 = datetime.strptime(tempStr2, format)

print("Stride Length: {}".format(rownumber-rownumber2))

StrideVelocity = (rownumber - rownumber2) / (tempStr2 - tempStr).total_seconds()
print("Stride Velocity: {}".format(StrideVelocity))

cadence = (3/(tempStr2 - tempStr).total_seconds())*60
print("Cadence: {}".format(cadence))

f.close()
