import React from "react"

export default function Conditional() {
    const [messages, setMessages] = React.useState(["a", 'b', "c"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */
    function checkArr(){
        let dis
        if(messages.length > 1){
            dis = <h1>You have {messages.length} messages</h1>
        }else if(messages.length == 1){
            dis = <h1>You have 1 unread message</h1>
        }else{
            dis = <h1>You're all caught up!</h1>
        }
        return dis
        
    }
    return (
        <div>
            {checkArr()}
        </div>
    )
}