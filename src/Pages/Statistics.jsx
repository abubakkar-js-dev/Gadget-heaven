import { Helmet } from "react-helmet-async";
import Heading from "../Components/Heading";
const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics || Gadget Heaven</title>
            </Helmet>
            <div className="bg-primary mb">
            <Heading headingText="Statistics" headingTagName="h2" />
            </div>

        </div>
    );
};

export default Statistics;