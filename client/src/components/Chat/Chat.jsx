import React from 'react'
import { useEffect } from 'react'

const Chat = () => {

 useEffect(() => {

    (function(d, m){
        const kommunicateSettings = 
            {"appId":"31a346338c55bdedfda02b368f1f703b8","popupWidget":true,"automaticChatOpenOnNavigation":true};
        const s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
},[])

  return (
    <div>
      
    </div>
  )
}

export default Chat
