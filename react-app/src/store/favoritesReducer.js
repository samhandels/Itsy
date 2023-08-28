export const LOAD_FAVORITES = '/favoritesReducer/loadFavorites';
export const GET_FAVORITE = '/favoritesReducer/getFavorite';
export const ADD_FAVORITE = '/favoritesReducer/addFavorite';
export const DELETE_FAVORITE = '/favoritesReducer/deleteFavorite';

const loadFavorites = (favorites) => {
    return {
        type: LOAD_FAVORITES,
        favorites,
    };
};

const getFavorite = (favorite) => {
    return {
        type: GET_FAVORITE,
        favorite,
    };
};

const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        favorite,
    };
};

const deleteFavorite = (favoriteId) => {
    return {
        type: DELETE_FAVORITE,
        favoriteId,
    };
};


export const getAllFavorites = () => async (dispatch) => {
    const res = await fetch('/api/favorites');
    const favorites = await res.json();
    dispatch(loadFavorites(favorites));
};


const initialState = {
    favorites: {},
    favorite: {},
};

export const favoritesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_FAVORITES:
            const favoritesState = { ...state, favorites: {}, favorite: { ...state.favorite } };
            action.favorites.forEach((favorite) => {
                favoritesState.favorites[favorite.id] = favorite;
            });
            return favoritesState;
        case GET_FAVORITE:
            newState = { ...state };
            newState.favorite = action.favorite;
            return newState;
        case ADD_FAVORITE:
            newState = { ...state, favorites: { ...state.favorites } };
            newState.favorites[action.favorite.id] = action.favorite;
            newState.favorite = action.favorite;
            return newState;
        case DELETE_FAVORITE:
            newState = { ...state, favorites: { ...state.favorites } };
            delete newState.favorites[action.favoriteId];
            return newState;
        default:
            return state;
    }
};
