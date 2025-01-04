import { Link, useLocation } from "react-router-dom";
import { allPagePath } from "../../../router/path";

const HonePage = () => {
    return (
        <>
            Homepage
            <Link to={allPagePath}>Log in
            </Link>
        </>
    );
}

export default HonePage

