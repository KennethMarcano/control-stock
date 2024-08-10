import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';

export default function persistedReducers(reducers) {
    const persistedReducer = persistReducer(
        {
            key: 'TEST-T-ALPHA',
            storage,
            whitelist: ['auth'],
        },
        reducers
    );

    return persistedReducer;
}