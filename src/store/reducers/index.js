import {combineReducers} from "redux";
import reducerMvPlaying from "./reducerMvPlaying";
import reducerMvPopular from "./reducerMvPopular";
import reducerMvTop from "./reducerMvTop";
import reducerTvAiring from "./reducerTvAiring";
import reducerTvPopular from "./reducerTvPopular";
import reducerTvTop from "./reducerTvTop";
import reducerOriginal from "./reducerOriginal";

const rootReducer = combineReducers({
    mvPlaying: reducerMvPlaying,
    mvPopular: reducerMvPopular,
    mvTop: reducerMvTop,
    tvAiring: reducerTvAiring,
    tvPopular: reducerTvPopular,
    tvTop: reducerTvTop,
    original: reducerOriginal
});

export default rootReducer;