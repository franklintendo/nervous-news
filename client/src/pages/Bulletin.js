import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";


function Bulletin() {

    const [state, dispatch] = useStoreContext();

    function sayReportTitle(report) {
        const title_speak = new SpeechSynthesisUtterance(report.title);
        const description_speak = new SpeechSynthesisUtterance(report.description);
        const content_speak = new SpeechSynthesisUtterance(report.content);
        title_speak.pitch = 1;
        description_speak.pitch = 1.5;
        content_speak.pitch = 2;
        window.speechSynthesis.speak(title_speak);
        window.speechSynthesis.speak(description_speak);
        window.speechSynthesis.speak(content_speak);
    }

    return(
        <div>
            {sayReportTitle(state.currentReport)}
            <p>{state.currentReport.title}</p>
            <p>{state.currentReport.description}</p>
            <p>{state.currentReport.content}</p>
        </div>
    )
}

export default Bulletin;