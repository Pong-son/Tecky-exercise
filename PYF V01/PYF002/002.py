# Loop: While
result = ""
i = 10
while i >= 0:
    if i > 0:
        result += str(i) + ","
    else:
        result += str(i)
    i -= 1
print(result)

result2 = ""
i = 0

while i < 5:
    j = 0
    while j < 3:
        if i < 4 or j < 2:
            result2 += str(j)+","
        else:
            result2 += str(j)
        j += 1
    i += 1
print(result2)
