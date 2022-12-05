import { createContext, useReducer } from "react";

type AppState = typeof initialState;

type Action =
  | { type: "DARKMODE_TRUE" }
  | { type: "DARKMODE_FALSE" }
  | { type: "TOGGLE_DARKMODE" };

interface DarkModeProviderProps {
    children: React.ReactNode
}

const initialState = {
    isDarkMode: true
};

const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case "DARKMODE_TRUE":
            return { ...state, isDarkMode: true };
        case "DARKMODE_FALSE":
            return { ...state, isDarkMode: false };
        case "TOGGLE_DARKMODE":
            return {...state, isDarkMode: !state.isDarkMode}
        default:
            return state;
    }
}

const DarkModeContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => { } });

function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DarkModeContext.Provider value={{ state, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider}