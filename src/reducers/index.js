const initialState = {
    isLoggedIn : false, 
    login: "admin",
    password: "12345",
    newsList: [],
    hasError: false,
    loading: true
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ON_AUTHORIZATION':
            return ({
                ...state,
                isLoggedIn: true
            });

        case 'NEWS_LOADED':
            return ({
                ...state,
                loading: false,
                newsList: action.payload
            });

        case 'ERROR_CATCHED':
            return ({
                ...state,
                hasError: true
            })

        default:
            return state;
    }
}

export default reducer;