import React, { useState } from "react";

function SaveBtn({ type = "default", className, children, onClick }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const click = () => {
        handleShow()
        onClick()
    };

    return (
        <>
            <button onClick={click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>
        </>
    );
};

export default SaveBtn;
