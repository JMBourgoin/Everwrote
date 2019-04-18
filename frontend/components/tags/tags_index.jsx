import React from 'react';
import { Link } from 'react-router-dom';
import AddTag from '../menus/new_tag_container';
import EditTag from '../menus/edit_tag_container';

class TagsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAddModal: false,
            showEditModal: false,
            tag: ""
        }

        this.handleNew = this.handleNew.bind(this);
        this.showAddModal = this.showAddModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllTags();
    }

    handleNew(e){
        e.preventDefault();
    }

    closeModal(e){
        this.setState({showEditModal: false, showAddModal: false});
    }
    
    showAddModal(e){
        e.preventDefault();
        this.setState({showAddModal: true, showEditModal: false });
    }

    showEditModal(tag){
        this.setState({ showEditModal: true, showAddModal: false, notebook: notebook, });
    }

    render(){
        const tagIndex = Object.values(this.props.tags);
        const alphaIndex = tagIndex.sort((a, b)=>{a.name - b.name});
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let sortedTagsArr = [];
        
        alpha.split('').forEach(letter => {
            let subArr = alphaIndex.filter(tag => {
                return tag.name[0].toUpperCase() === letter});
                if(subArr.length > 0){
                    sortedTagsArr.push([letter, subArr]) 
                }
        });
        
        const sortedIndex = sortedTagsArr.map((letterTags, index) => {
            return (
                <div key={index} className="tags-index-letter-groups">
                    <h3>{letterTags[0]}</h3>
                    <ul className= "tags-index-inner-list">
                      {
                         letterTags[1].map(tag => {
                          return (
                              <li key={tag.id}><Link to={`/notes/${tag.id}`}>{tag.name}</Link></li>
                          )
                      })
                    }  
                    </ul>
                </div>
            )
        })

        return (
            <div className="tags-index-outer-container">
                {
                this.state.showAddModal ?
                (
                    <AddTag 
                    closeModal={this.closeModal}
                    />
                ) :
                (null)
                }
                {
                this.state.showEditModal ?
                (
                <EditTag
                    notebook={this.state.tag}
                    closeModal={this.closeModal}
                />
                ) :
                (null)
                }
                <div className="tags-index-header">
                    <div className="tags-index-header-title">
                        <h3>Tags</h3>
                    </div>
                    <div className="tags-index-header-button">
                        <img onClick={this.handleNew}src="" alt=""/>
                        <button onClick={this.showAddModal}>Tags</button>
                    </div>
                </div>

                <div className="tags-index-body">
                    { sortedIndex }
                </div>
            </div>
        )
    }
}

export default TagsIndex;