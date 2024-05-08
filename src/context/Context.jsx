import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState(""); // the recent prompt
    const [prevPrompts, setPrevPrompt] = useState([]); // the previous prompt
    const [showResult, setShowResult] = useState(false); // showing the result
    const [loading, setLoading] = useState(false); // loading state
    const [resultData, setResultData] = useState(""); // result of the data

    const onSent = async (prompt) => {
        await runChat(input)
    }


    const contextValue = {
        prevPrompts,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider