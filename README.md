# README

[Everwrote](https://everwrote.herokuapp.com/Everwrote) is an Evernote clone built with React, Redux, Ruby-On-Rails and PostgreSQL.  Users can create notebooks and fill them with notes using imbedded font styling, images and links.
![](./readme_pics/splash_page.png)

## Features
#### • Secure user authentication<br>
![](./readme_pics/login.png)
#### • Create and edit notes in a rich text editor<br>
![](./readme_pics/rich_text.png)
#### • Save and organize notes to notebooks<br>
![](./readme_pics/notebook_index.png)
#### • Add / Organize / Sort notes by custom tags.<br>
![](./readme_pics/tags_index.png)
![](./readme_pics/sort_by_tag.png)
#### • Add custom tags to notes
![](https://media.giphy.com/media/3d4INILQVWpvEtm08t/giphy.gif)
#### • Create & remove custom tags
![](https://media.giphy.com/media/7JNtq3NaAoMOhjuZXp/giphy.gif)
#### • Sort notes by tag
![](https://media.giphy.com/media/2YaJDYChG5Y7x27s9a/giphy.gif)
• Filter notes by notebook, date created / updated, and title.

## Technologies
### Frontend

• REACT (JS library)<br>
• REDUX (state manager)<br>
• REACT-QUILL (rich text editor API)<br>
• AJAX 

### Backend
• RUBY ON RAILS<br>
• POSTGRESQL<br>
 

## Featured Highlights 
• New Notes custom routes functionality: <br>

Handling the proper render of clicking the "NEW NOTE" button was a challenge that
uses Regular Expressions to creatively solve.  The buttons effect needed to change depending on 
the current path. 

```javascript
if (/notebooks\/\d*/.test(ownProps.location.pathname)) {
    newNotePath = ownProps.location.pathname.replace(/\/\d+(?=\/notebooks\/\d+)/, "");
  } else {
     newNotePath = `/notes/notebooks/${notebooksArr[lastNbId].id}`;
  } 
```

