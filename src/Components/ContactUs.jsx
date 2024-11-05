import { Helmet } from 'react-helmet-async';
import Heading from '../Components/Heading'
const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact us || Gadget Heaven</title>
            </Helmet>
            <div className='bg-primary'>
            <Heading headingText='Contact Us' headingTagName='h2' />
            </div>
            <h2>Contact Us page</h2>
        </div>
    );
};

export default ContactUs;