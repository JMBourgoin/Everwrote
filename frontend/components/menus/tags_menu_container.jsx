import React from 'react';
import { connect } from 'react-redux';
import { addTagToNote } from '../../actions/tags';

const msp = (state, ownProps) => {
    let tags = state.entities.tags;
    let noteId = ownProps.noteId;
    
    return({
        tags,
        noteId,
    });
};

const mdp = dispatch => {
    return ({
        addTagToNote: join => dispatch(addTagToNote(join)),
    });
};



class TagsMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.addTag = this.addTag.bind(this);
    }

    showMenu(e){
        e.preventDefault();
        this.setState({showMenu: true});
        document.addEventListener("click", this.closeMenu);
    }

    closeMenu(e){
        e.preventDefault();
        this.setState({showMenu: false});
        document.removeEventListener("click", this.closeMenu);
    }

    addTag(id, e){
        e.preventDefault();
        let join = {
            note_id: this.props.noteId,
            tag_id: id
        }
        this.props.addTagToNote(join);
    }

    render(){
        let tagsArr = Object.values(this.props.tags);
        let tags = tagsArr.map(tag => {
            return (
                    <li key={tag.id}>
                        <button onClick={(e) => this.addTag(tag.id, e)}>{tag.name}</button>
                    </li>
            )
        });

        return (
            <div>
                <button onClick={this.showMenu}>
                      <div className="note-tags-container">
                          <img src={window.tagPic} alt="tags"/>
                          <p>Add Tag</p>
                      </div>
                </button>
                { this.state.showMenu ? (
                    <div className="tags-menu">
                        <ul>
                            { tags }
                        </ul>
                    </div>
                ) : null
            }
            </div>
            
        )
    }
}

export default connect(msp, mdp)(TagsMenu);