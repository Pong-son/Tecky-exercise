# Part1

price_of_apple = float(5)
number_of_apple = 200
total = price_of_apple * number_of_apple
print(total)

price_of_orange = float(6)
number_of_orange = 100
total = price_of_apple * number_of_apple + price_of_orange * number_of_orange
print(total)

# Part2

GP = 24
FG = 0.461
FT = 0.690
REB = 2.6
AST = 1.6
BLK = 0.3
TL = 0.5
TO = 1.0
PTS = 9.9
EFF = (PTS + REB + AST + TL + BLK - FG - FT - TO) / GP


print(EFF)
