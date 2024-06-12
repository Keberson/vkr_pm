import React from "react";

import {SpinnerIcon} from "../../assets/SpinnerIcon";

export const Loader = () => {
    return (
        <div role="status">
            <SpinnerIcon />
            <span className="sr-only">Loading...</span>
        </div>
    )
}
