import csv
with open("./PYF v01/PYF004/002.csv", "r", newline="") as readdata:
    data = csv.writer(readdata)
    data.writerow
# with open("./PYF v01/PYF004/002csv", "r", newline="") as f:
#     test = csv.writer(f)
#     test.writerow(["No", "Name"])
#     test.writerow([1, "Jason"])
#     test.writerow([2, "Jason"])
