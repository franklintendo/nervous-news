import React, { createContext, useReducer, useContext } from "react";

import {
    SET_REPORTS,
    SET_CURRENT_REPORT,
    LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_REPORTS:
            return {
                ...state,
                reports: action.reports,
                loading: false,
            };
        case SET_CURRENT_REPORT:
            return {
                ...state,
                currentReport: {
                    source: action.currentReport.source,
                    author: action.currentReport.author,
                    title: action.currentReport.title,
                    description: action.currentReport.description,
                    url: action.currentReport.url,
                    image: action.currentReport.image,
                    date: action.currentReport.date,
                    content: action.currentReport.content,
                },
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        reports: [],
        currentReport: {
            source: "",
            author: "",
            title: "",
            description: "",
            url: "",
            image: "",
            date: "",
            content: "",
        },
        loading: false,
    });

    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
export { StoreProvider, useStoreContext };