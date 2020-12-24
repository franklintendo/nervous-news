import React from "react";
import { Col } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_REPORT } from "../utils/actions";
import { useHistory } from "react-router-dom";


function ReportLink(props) {

    const [state, dispatch] = useStoreContext();
    let history = useHistory();

    function setCurrentReport() {
        dispatch({
            type: SET_CURRENT_REPORT,
            currentReport: {
                source: props.source,
                author: props.author,
                title: props.title,
                description: props.description,
                url: props.url,
                image: props.image,
                date: props.date,
                content: props.content,
            }
        });
        
        return history.push(`/news-bulletin`);
    }

    return(
        <Col>
            <img onClick={() => setCurrentReport()} src={props.image} style={{width: "250px", height: "auto"}} alt={props.title} /> <p>{props.title}</p> 
        </Col>
    )
}

export default ReportLink;