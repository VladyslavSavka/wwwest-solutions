import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import NewsItem from '../news-item';
import {withFakeNewsService} from '../hoc';
import Spinner from '../spinner';
import {newsLoaded, errorCatched} from '../../actions';

const NewsList = ({fakeNewsService, newsLoaded, newsList, loading, errorCatched}) => {
    
    useEffect(() => {
        fakeNewsService.getNews().then(
            (news) => newsLoaded(news)
        )
        .catch(() => errorCatched());
    }, []);

    if(loading){
        return (
            <div className="loader">
                <Spinner/>
            </div>
        )
    }

    return (
        <div className="container">
                {
                    newsList.map(newsItem => {
                        return (
                                <NewsItem item={newsItem}/>
                        )
                    })
                }
        </div>
    )
}

const mapStateToProps = ({newsList, loading}) => ({newsList, loading});

const mapDispatchToProps = {
    newsLoaded,
    errorCatched
};


export default withFakeNewsService()(
    connect(mapStateToProps, mapDispatchToProps)(NewsList));