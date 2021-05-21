import { Link } from "react-router-dom";

import { StyledDrawer } from "./styled";

const NavigationDrawer = ({ visible, onClose, links }) => {
    
    const renderDrawerLinks = (link) => {
        return link.map(({ path, name, icon }) => {
            return (
                <Link key={path} to={path} className="drawer-item">
                    {icon}
                    <span className="link">{name}</span>
                </Link>
            );
        });
    };

    return (
        <StyledDrawer visible={visible} onClose={onClose}>
            {renderDrawerLinks(links)}
        </StyledDrawer>
    );
};

export default NavigationDrawer;