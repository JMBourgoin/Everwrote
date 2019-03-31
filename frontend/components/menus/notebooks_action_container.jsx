import { connect } from 'react-redux';
import React from 'react';

const msp = state => {
    return ({

    });
};

const mdp = dispatch => {
    return ({

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

    render(){
        return (
            <div>
                <button className="button-text" onClick={this.openMenu}>•••</button>

                { 
                    this.state.showMenu ? 
                    (
                        <div className="notebook-action-menu">
                            <button className="button-text">edit</button>
                            <button className="button-text">delete</button>
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