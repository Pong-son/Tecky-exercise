list = [
    {"name": "Alex", "height": 179, "hobbies": ["Eating", "Sleeping"]},
    {"name": "Gordon", "height": 180, "hobbies": ["Movie"]},
    {"name": "Michael", "height": 185, "hobbies": ["Eating"]},
    {"name": "Jason", "height": 170, "hobbies": []},
]

newlist = [person["name"] for person in list if person["height"]
           > 170 and "Eating" in person["hobbies"]]
print(newlist)
