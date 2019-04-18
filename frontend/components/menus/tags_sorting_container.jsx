import React from 'react';


class TagsSortingMenu extends React.Component {
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
      const tags = this.props.tags.map(tag => {
        return (
          <li key={tag.id}>
             <div className="nb-sorting">
                <button 
                  name={tag.id}
                  onClick={this.props.byTagClick} 
                  className="nb-sorting-button">{tag.name}
                </button>
              </div>
          </li>
        )
      })
        return (
          <div>
            <button className="button-text" onClick={this.openMenu}>
              <img src={window.tagPic} alt="sort" />
            </button>

            {this.state.showMenu ? (
              <div className={this.props.klass}>
               <ul className="nb-sorting-list">
                 { tags }
               </ul>
              </div>
            ) : null}
          </div>
        );
    }
}

export default TagsSortingMenu;