# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {email: 'demo_user@gmail.com', password: 'password'}, 
  {email: 'test2@gmail.com', password: 'password'},
  {email: 'test3@gmail.com', password: 'password'},
  {email: 'test4@gmail.com', password: 'password'},
  {email: 'test5@gmail.com', password: 'password'},
  {email: 'test6@gmail.com', password: 'password'}
])

notebooks = Notebook.create([
  {title: 'Thoughts on stuff.', author_id: 0},
  {title: 'Drinking water.', author_id: 0},
  {title: 'Foot Pain.', author_id: 0},
  {title: 'My favorite cats tricks.', author_id: 0},
  {title: 'Where & How to find stuff.', author_id: 0},
  {title: 'Random things.', author_id: 0},
  {title: 'Deep thoughts.', author_id: 1},
  {title: 'Lists of stuff.', author_id: 1},
  {title: 'Dreams I had once.', author_id: 1},
  {title: 'Shoes I like.', author_id: 1},
  {title: 'My favorite Movies.', author_id: 1},
  {title: 'My Notebook 6', author_id: 1},
  {title: 'My Notebook 1', author_id: 3},
  {title: 'My Notebook 2', author_id: 3},
  {title: 'My Notebook 3', author_id: 3},
  {title: 'My Notebook 4', author_id: 3},
  {title: 'My Notebook 5', author_id: 3},
  {title: 'My Notebook 1', author_id: 4},
  {title: 'My Notebook 2', author_id: 4},
  {title: 'My Notebook 3', author_id: 4},
  {title: 'My Notebook 4', author_id: 4},
  {title: 'My Notebook 1', author_id: 5}
])