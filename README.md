# Hogwarts

1. app -- CharacterContainer -- Character -- UpdateForm
show the container with character cards inside
  -image1, their name, and their house
  -on char container, click on character's house will bring up a form to change their house

2. app -- new character form

3. app -- HouseContainer -- House || CharacterDetails -- UpdateForm


Deliverables:

✅- Have an index that lists out each character by showing their image1, their name, and their house

✅- When you click on their house it should bring up an edit form to change their house
  - Do this optimistically and then do it using fetch
  componentDidUpdate()
  fetch(api, PATCH)

✅- Have 4 sections underneath the list that shows each Hogwarts house (Gryffindor, Slytherin, HufflePuff, Ravenclaw) as well as the image2 for the characters who belong to those houses

✅- Have a form to add characters on submit
  - Do this optimistically and then do it using fetch
  --> componentDidUpdate()
  fetch(api, POST)

✅- When you click on a character's image in the "House" section of the page it should display the character's name, house, role, and age.
--> onClick (on House) to clickHandler (on House) to toggle character details (props to char details) showing
  --> if clicked is true display details

- Have a search form that allows you to search characters by name or house

- When you click on the house you should be able to change the house
  --> same as CharCard, but in House
