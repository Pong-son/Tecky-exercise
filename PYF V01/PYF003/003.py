colleagues = [
    {"Name": "Alex", "Years_of_work": 6,
        "Performance": "Poor", "Monthly_salary": 10000},
    {"Name": "Gordon", "Years_of_work": 5.5,
        "Performance": "Good", "Monthly_salary": 40000},
    {"Name": "Michael", "Years_of_work": 3,
        "Performance": "Good", "Monthly_salary": 80000},
    {"Name": "Jason", "Years_of_work": 7,
        "Performance": "Good", "Monthly_salary": 70000},
    {"Name": "Brian", "Years_of_work": 0.5,
        "Performance": "Good", "Monthly_salary": 20000}
]


def year_end_bonus(year, performance, salary):
    bonus = 0
    if year > 5 and performance == "Good":
        bonus = salary * 2
    elif year > 1:
        bonus = salary
    return bonus


def total_bonus():
    total = 0
    for collengue in colleagues:
        total += year_end_bonus(collengue["Years_of_work"],
                                collengue["Performance"], collengue["Monthly_salary"])
    return total


for collengue in colleagues:
    print(year_end_bonus(collengue["Years_of_work"],
          collengue["Performance"], collengue["Monthly_salary"]))

print(total_bonus())
