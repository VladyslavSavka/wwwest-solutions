const onAuthorization = (obj) => {
    return {
        type: 'ON_AUTHORIZATION',
        payload: obj
    };
};

const errorCatched = () => {
    return ({
        type: 'ERROR_CATCHED'
    });
};

const newsLoaded = (news) => {
    return ({
        type: 'NEWS_LOADED',
        payload: news
    })
}


export {
    onAuthorization,
    errorCatched,
    newsLoaded
}