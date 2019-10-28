import {combineReducers} from "redux";
import reducerMvLatest from "./reducerMvLatest";
import reducerMvPopular from "./reducerMvPopular";
import reducerMvTop from "./reducerMvTop";
import reducerTvLatest from "./reducerTvLatest";
import reducerTvPopular from "./reducerTvPopular";
import reducerTvTop from "./reducerTvTop";
import reducerOriginal from "./reducerOriginal";

const rootReducer = combineReducers({
    mvLatest: reducerMvLatest,
    myPopular: reducerMvPopular,
    mvTop: reducerMvTop,
    tvLatest: reducerTvLatest,
    tvPopular: reducerTvPopular,
    tvTop: reducerTvTop,
    original: reducerOriginal
});

export default rootReducer;