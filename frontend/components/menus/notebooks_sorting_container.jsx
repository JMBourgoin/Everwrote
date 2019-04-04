import React from 'react';


class NotebooksSortingMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true });
        document.addEventListener('click', this.closeMenu);
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: false });
        document.removeEventListener('click', this.closeMenu);
    }

    render() {
        return (
          <div>
            <button className="button-text" onClick={this.openMenu}>
              <img src={window.sortPic} alt="sort" />
            </button>

            {this.state.showMenu ? (
              <div className={this.props.klass}>
                <div className="nb-sorting">
                  <button onClick={this.props.titleClick} className="nb-sorting-button">Sort by Title</button>
                </div>
                <div className="nb-sorting">
                  <button onClick={this.props.createdClick} className="nb-sorting-button">Sort by Created</button>
                </div>
                <div className="nb-sorting">
                  <button onClick={this.props.updatedClick} className="nb-sorting-button">Sort by Updated</button>
                </div>
              </div>
            ) : null}
          </div>
        );
    }
}

export default NotebooksSortingMenu;