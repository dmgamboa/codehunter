import { LogoutOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import CustomAvatar from "../../components/CustomAvatar";
import { useAuth } from "../../context/Auth";

import { StyledDrawer } from "./styled";

const NavigationDrawer = ({ visible, onClose, links, page, handleClick }) => {
    const { logout, getUserData } = useAuth();
    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.push("/");
    };

    const renderDrawerLinks = (link) => {
        return link.map(({ path, name, icon }) => {
            return (
                <span
                    key={path}
                    onClick={() => handleClick(path)}
                    className={`drawer-item ${path === page && "active"}`}
                >
                    {icon}
                    <span className="link">{name}</span>
                </span>
            );
        });
    };

    return (
        <StyledDrawer visible={visible} onClose={onClose}>
            <span className="circles"></span>

            <div className="top">
                <CustomAvatar photo={getUserData()?.avatar}/>
                <div className="text">
                    <span className="name">{getUserData()?.name?.first}</span>
                    <span className="points">
                        <b>{getUserData()?.points ?? 0}</b> points
                    </span>
                </div>
            </div>
            <div className="links">
                <span className="main-links">{renderDrawerLinks(links)}</span>

                <span className="drawer-item active logout" onClick={handleLogout}>
                    <LogoutOutlined />
                    <span className="link">Log Out</span>
                </span>
            </div>
        </StyledDrawer>
    );
};

export default NavigationDrawer;
