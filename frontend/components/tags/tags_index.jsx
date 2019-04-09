import React from 'react';
import {Link} from 'react-router-dom';

class TagsIndex extends React.Component {
    constructor(props){
        super(props);

        this.handleNew = this.handleNew.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllTags();
    }

    handleNew(e){
        e.preventDefault();
        this
    }

    render(){
        const tagIndex = Object.values(this.props.tags);
        const alphaIndex = tagIndex.sort((a, b)=>{a.name - b.name});
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let sortedTagsArr = [];
        
        alpha.split('').forEach(letter => {
            let subArr = alphaIndex.filter(tag => {
                return tag.name[0].toUpperCase() === letter});
                debugger
                if(subArr.length > 0){
                    sortedTagsArr.push([letter, subArr]) 
                }
        });
        
        const sortedIndex = sortedTagsArr.map(letterTags => {
            return (
                <div className="tags-index-letter-groups">
                    <h3>{letterTags[0]}</h3>
                    <ul className= "tags-index-inner-list">
                      {
                         letterTags[1].map(tag => {
                          return (
                              <li key={tag.id}>{tag.name}</li>
                          )
                      })
                    }  
                    </ul>
                </div>
            )
        });

        debugger

        return (
            <div className="tags-index-outer-container">
                <div className="tags-index-header">
                    <div className="tags-index-header-title">
                        <h3>Tags</h3>
                    </div>
                    <div className="tags-index-header-button">
                        <img onClick={this.handleNew}src="" alt=""/>
                        <button onClick={this.handleNew}>Tags</button>
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