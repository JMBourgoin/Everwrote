import React from 'react';
import { connect } from 'react-redux';

const msp = state => {
    let tags = state.entities.tags;
    
    return({
        tags,
    });
};

const mdp = dispatch => {
    return ({
        addTagToNote: id => dispatch(addTagToNote(id)),
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

    addTag(id){

    }

    render(){
        let tagsArr = Object.values(this.props.tags);
        let tags = tagsArr.map(tag => {
            return (
                <ul>
                    <li>
                        <button onClick={this.addTag(tag.id)}>{tag.name}</button>
                    </li>
                </ul>
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
                            { tags }
                    </div>
                ) : null
            }
            </div>
            
        )
    }
}

export default connect(msp, mdp)(TagsMenu);