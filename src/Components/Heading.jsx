import PropTypes from "prop-types";

const Heading = ({ headingText, headingTagName = "h1" }) => {
  const Tag = headingTagName;
  return (
    <div className="text-white mx-[30px] text-center">
      <div className="w-2/3 mx-auto space-y-6 ">
        <Tag className={`text-[32px] ${headingTagName === 'h1' && 'md:text-4xl lg:text-6xl'} leading-10`}>{headingText}</Tag>
        <p className="text-base w-1/2 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
    </div>
  );
};

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  headingTagName: PropTypes.string.isRequired,
};

export default Heading;
