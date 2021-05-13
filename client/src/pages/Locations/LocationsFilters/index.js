import { 
    Form,
    Radio,
    Switch
} from "antd";
import Icon, { 
    EnvironmentOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    CheckCircleOutlined
} from "@ant-design/icons";

import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

import StyledDrawer from "./styled";
import { fromPairs } from "lodash";

const LocationsFilters = ({
    visible,
    onClose,
    filters
}) => {
    return (
        <StyledDrawer
            placement="bottom"
            height="100%"
            visible={visible}
            onClose={onClose}
            title={(
                <>
                    <Icon component={FilterIcon} />
                    <h1>Sort and Filter</h1>
                </>
            )}
        >
            <Form
                initialValues={filters}
                layout="vertical"
            >
                <Form.Item
                    label="Sort by"
                    name="sort"
                >
                    <Radio.Group className="sort">
                        <Radio.Button value="az">
                            <ArrowUpOutlined />
                            A - Z
                        </Radio.Button>

                        <Radio.Button value="distance">
                            <EnvironmentOutlined />
                            Nearest
                        </Radio.Button>
                        
                        <Radio.Button value="za">
                            <ArrowDownOutlined />
                            Z - A
                        </Radio.Button>
                    </Radio.Group>   
                </Form.Item>

                <Form.Item label="Show only:">
                    <Form.Item name="bookmarked">
                        <Switch />
                        <span>
                            <Icon component={BookmarkIcon} />
                            Bookmarked
                        </span>
                    </Form.Item>

                    <Form.Item name="visited">
                        <Switch />
                        <span>
                            <CheckCircleOutlined />
                            Visited
                        </span>
                    </Form.Item>

                </Form.Item>
                     
   
            </Form>
        </StyledDrawer>
    );
}

export default LocationsFilters;