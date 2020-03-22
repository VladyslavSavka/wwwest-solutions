import React from 'react';

const NewsItem = ({item}) => {
    return (
        <div className="card my-5">
            <img className="card-img-top" src={item.urlToImage} alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a className="btn btn-primary" href={item.url} 
                target="_blank" rel="noopener noreferrer">
                    Details at {item.source.name}
                </a>
            </div>
        </div>
    )
}

export default NewsItem;