import { createContext } from "react"
import { doctors } from "../assets/assets"

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const curreySymbol = 'Rs'
    const value = {
doctors,curreySymbol
    }

return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
};
export default AppContextProvider
