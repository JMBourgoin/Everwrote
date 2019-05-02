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
            tag: "",
            klass: {},
            columns: '',
        }

        this.handleNew = this.handleNew.bind(this);
        this.showAddModal = this.showAddModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.hover = this.hover.bind(this);
        this.classReset = this.classReset.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
       
    }
    setColumns(tags){
        let columns = '';
        if(Object.keys(tags.tags).length < 20){
            columns = 'tags-index-body';
        } else if(Object.keys(tags.tags).length >= 20 && Object.keys(tags.tags).length <= 40){
            columns = 'tags-index-body-2';
        } else {
            columns = 'tags-index-body-3';
        }
        this.setState({columns: columns});
    }

    componentDidMount(){
        this.props.fetchAllTags().then(tags => {this.setColumns(tags)});
    }


    handleDelete(e){
        e.preventDefault();
        const tagId = parseInt(e.target.getAttribute('name'));

        this.props.deleteTag(tagId);
        let tagsCopy = Object.assign(this.props.tags);  
        delete tagsCopy[tagId];
        this.setState({tags: tagsCopy});  
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
    
    hover(e){
        e.preventDefault();
       let key = e.getAttribute('key');
        this.setState({klass: {[key]: 'delete-tag-button'}});
    }

    classReset(e){
        e.preventDefault();
        let key = e.getAttribute('key');
        this.setState({klass: {[key]: 'hide'}});
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
                              <li 
                              className="tag-button"
                              key={tag.id}>
                                <Link to={`/notes/${tag.id}`}>{tag.name}</Link>
                                <button className="delete-button" name={tag.id} onClick={this.handleDelete}>delete</button>
                              </li>
                          )
                      })
                    }  
                    </ul>
                </div>
            )
        });


        return (
            <div className="tags-index-outer-container">
                <div className="tags-index-inner-container">
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
                            <button onClick={this.showAddModal}>
                            <img onClick={this.handleNew}src={window.newNote} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className={this.state.columns}>
                        { sortedIndex }
                    </div>
                </div>
            </div>
        )
    }
}

export default TagsIndex;