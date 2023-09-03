import { createContext, useState } from "react";

export const ChatBoxContext = createContext();

export const ChatBoxProvider = props => {
      const [chat, setChat] = useState(false)

      return (
            <ChatBoxContext.Provider
                  value={{ chat, setChat }}
            >
            {props.children}
            </ChatBoxContext.Provider>
      )

}
