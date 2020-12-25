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
        content_speak.rate = 1.2;

        title_speak.onstart = function(event) {
            document.getElementById('report-caption').innerHTML = event.utterance.text;
          };
        
        description_speak.onstart = function(event) {
            document.getElementById('report-caption').innerHTML = event.utterance.text;
          };
        content_speak.onstart = function(event) {
            document.getElementById('report-caption').innerHTML = event.utterance.text;
          };

        window.speechSynthesis.speak(title_speak);
        window.speechSynthesis.speak(description_speak);
        window.speechSynthesis.speak(content_speak);
    }

    // let report = state.currentReport.description + " " + state.currentReport.content;
    
    // let firstPart = report.substring(0, report.length / 4);
    // let firstPart = report.substring(0, report.length / 4);
    // console.log(report);

    return(
        <div>
            <img src={state.currentReport.image} alt={state.currentReport.title} style={{width: "400px", height: "auto"}} />
            {sayReportTitle(state.currentReport)}
            {/* <p>{state.currentReport.title}</p>
            <p>{state.currentReport.description}</p>
            <p>{state.currentReport.content}</p> */}
            <p id="report-caption"></p>
        </div>
    )
}

export default Bulletin;