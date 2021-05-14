// From https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2

const ConditionalWrapper = ({ condition, wrapper, children }) => {
    return (
        <>
        {condition ? wrapper(children) : children}
        </>
    );
};

export default ConditionalWrapper;