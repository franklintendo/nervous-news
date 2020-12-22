import React from "react";
import { Col } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_REPORT } from "../utils/actions";



function ReportLink(props) {

    const [state, dispatch] = useStoreContext();

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
    }

    return(
        <Col>
            <img onClick={() => setCurrentReport()} src={props.image} style={{width: "250px", height: "auto"}} alt={props.title} /> <p>{props.title}</p> 
        </Col>
    )
}

export default ReportLink;