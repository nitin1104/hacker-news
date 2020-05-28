import React, {Fragment} from 'react';
import Moment from 'moment';
import './News.scss';

function News (props) { 
    function getShortURL(url) {
        return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
    }
    return (
        <Fragment>
            <ul className="newsContainer">
                {props.newsData.map(item => {
                    if (item.title) {
                      return (
                        <li key={item.objectID} className="news-block">
                            <div className="comments">{item.num_comments}</div>
                            <div>{item.points}</div>
                            <div className="votes">
                                <span className="vote">{item.points}</span>
                                <button className="vote-icon">upvote</button>
                            </div>
                            <div className="title">{item.title}</div>
                            <div className="additional-info">{item.url ? '(' + getShortURL(item.url) + ')' : ''}</div>
                            <div className="additional-info">Create : {Moment(item.created_at).fromNow()}</div>
                            <div className="hide-info">
                                <button className="hide-link">[ Hide ]</button>
                            </div>
                        </li>
                        )  
                    } else {
                        return null;
                    }
                })} 
            </ul>
        </Fragment>
    )
}

export default News;