import React, { Fragment } from "react";
import LoadSpinner from "../Assets/images.jpg";
function Spinning() {
    return (
        <Fragment>
            <img
                src={LoadSpinner}
                alt="Loading..."
                style={{
                    width: "200px",
                    margin: "auto",
                    display: "block",
                }} />
        </Fragment>
    );
}
export default Spinning
