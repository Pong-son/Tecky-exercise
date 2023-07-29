students = [
    {"Name": "Peter", "Height": 175, "Hobbies": ["Football", "Basketball"]},
    {"Name": "John", "Height": 180, "Hobbies": ["Basketball", "Sleeping"]},
    {"Name": "Betty", "Height": 170, "Hobbies": ["Reading"]},
    {"Name": "Mary", "Height": 160, "Hobbies": [
        "Eating", "Sleeping", "Reading"]}
]

for student in students:
    if student["Height"] > 170:
        print(student["Name"])
