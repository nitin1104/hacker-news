export default function news(news = {}, action) {
    switch(action.type) {
        case 'FETCH_NEWS':
            return {
                ...action.payload
            };
        case 'FETCH_ERROR':
            return {};
        case 'HIDE_NEWS':
            return {
                ...news,
                hits: (news.hits || []).filter(item => item.objectID !== action.payload)
            };
        case 'UPVOTE':
            return {
                ...news,
                hits: (news.hits || []).map(item => {
                    if (item.objectID === action.payload.id) {
                        return {
                            ...item,
                            _upvotes: action.payload.upvotes
                        };
                    }

                    return item;
                })
            };
        default:
            return news;
    }
}