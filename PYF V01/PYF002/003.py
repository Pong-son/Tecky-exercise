# List I
list = []
i = 1
while i < 101:
    list.append(i)
    i += 1
print(list)
i = 0
newlist = []
while i < 100:
    if list[i] % 3 == 0:
        newlist.append(list[i])
    i += 1
print(newlist)
