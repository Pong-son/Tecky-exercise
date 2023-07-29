sentence = "tecky academy is a good coding bootcamp"

print(sentence[:len("tecky academy")].title() +
      sentence[len("tecky academy"):-8] + sentence[-8:].upper())
