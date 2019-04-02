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

notes - Note.create([
  {title: 'Wonderful Note.', body: 'This note is about being a wonderful note.  It is a special note, this note.  Wonderful.', author_id: 0, notebook_id: 1},
  {title: 'Bonderful Note.', body: 'This note is about being a Bonderful note.  It is a special note, this note.  Bonderful.', author_id: 0, notebook_id: 1},
  {title: 'Vonderful Note.', body: 'This note is about being a Vonderful note.  It is a special note, this note.  Vonderful.', author_id: 0, notebook_id: 1},
  {title: 'Gonderful Note.', body: 'This note is about being a wonderful note.  It is a special note, this note.  Wonderful.', author_id: 0, notebook_id: 1},
  {title: 'Sonderful Note.', body: 'This note is about being a Sonderful note.  It is a special note, this note.  Sonderful.', author_id: 0, notebook_id: 1},
  {title: 'Xonderful Note.', body: 'This note is about being a Xonderful note.  It is a special note, this note.  Xonderful.', author_id: 0, notebook_id: 1},
  {title: 'Zonderful Note.', body: 'This note is about being a Zonderful note.  It is a special note, this note.  Zonderful.', author_id: 0, notebook_id: 1},
  {title: 'Qonderful Note.', body: 'This note is about being a Qonderful note.  It is a special note, this note.  Qonderful.', author_id: 0, notebook_id: 1},
  {title: 'Londerful Note.', body: 'This note is about being a Londerful note.  It is a special note, this note.  Londerful.', author_id: 0, notebook_id: 1},
  {title: 'Ponderful Note.', body: 'This note is about being a Ponderful note.  It is a special note, this note.  Ponderful.', author_id: 0, notebook_id: 1},
  {title: 'Quonderful Note.', body: 'This note is about being a Quonderful note.  It is a special note, this note.  Quonderful.', author_id: 0, notebook_id: 0}

])