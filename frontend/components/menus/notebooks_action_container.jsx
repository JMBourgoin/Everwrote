import { connect } from 'react-redux';
import { updateNotebook, deleteNotebook } from '../../actions/notebooks';
import React from 'react';

const msp = (state, ownProps) => {
    let id = ownProps.id;
    let notebook = state.entities.notebooks[id];

    return ({
        notebook,
    });
};

const mdp = dispatch => {
    return ({
        deleteNotebook: id => dispatch(deleteNotebook(id)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook))
    });
};

class NotebooksActionMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.editHandle = this.editHandle.bind(this);
        this.deleteHandle = this.deleteHandle.bind(this);
    }

    openMenu(e){
        e.preventDefault();
        this.setState({ showMenu: true });
        document.addEventListener('click', this.closeMenu);
    }

    closeMenu(e){
        e.preventDefault();
        this.setState({showMenu: false});
        document.removeEventListener('click', this.closeMenu);
    }

    deleteHandle(){
        this.props.deleteNotebook(this.props.notebook.id);
    }

    editHandle(){

    }

    render(){
        return (
            <div>
                <button className="button-text" onClick={this.openMenu}>•••</button>

                { 
                    this.state.showMenu ? 
                    (
                        <div className="notebook-action-menu">
                            <button onClick={this.editHandle} className="button-text">edit</button>
                            <button onClick={this.deleteHandle} className="button-text">delete</button>
                        </div>
                    ) : (
                        null
                    )
                 }
            </div>
        );
    }
}

export default connect(msp, mdp)(NotebooksActionMenu);