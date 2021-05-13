import {
    Form,
    Radio,
    Switch,
    Select,
    Button
} from "antd";
import Icon, { 
    EnvironmentOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    CheckCircleOutlined,
    UndoOutlined
} from "@ant-design/icons";
import { kebabCase, lowerCase } from "lodash";

import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

import { locationTypes, neighborhoods } from "./constant";
import StyledDrawer from "./styled";

const LocationsFilters = ({
    visible,
    onClose,
    filters
}) => {

    const { Option } = Select;

    const renderOptions = (opts) => {
        return opts.map((option) => {
            return (
                <Option
                    key={kebabCase(option)}
                    value={lowerCase(option)}
                >
                    {option}
                </Option>
            );
        })
    }

    return (
        <StyledDrawer
            placement="bottom"
            height="auto"
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
                            <ArrowUpOutlined /> A - Z
                        </Radio.Button>

                        <Radio.Button value="distance">
                            <EnvironmentOutlined /> Nearest
                        </Radio.Button>
                        
                        <Radio.Button value="za">
                            <ArrowDownOutlined /> Z - A
                        </Radio.Button>
                    </Radio.Group>   
                </Form.Item>

                <Form.Item label="Show only:">
                    <Form.Item className="switch" name="bookmarked">
                        <Switch />
                        <span className="switch-label">
                            <Icon component={BookmarkIcon} />
                            Bookmarked
                        </span>
                    </Form.Item>

                    <Form.Item className="switch" name="visited">
                        <Switch />
                        <span className="switch-label">
                            <CheckCircleOutlined />
                            Visited
                        </span>
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    label="Location Type"
                    name="type"
                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Any"
                    >
                        {renderOptions(locationTypes)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Neighborhood"
                    name="neighborhood"
                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Any"
                    >
                        {renderOptions(neighborhoods)}
                    </Select>
                </Form.Item>
                

                <span className="buttons">
                    <Button
                        type="primary"
                        block
                    >
                        Apply
                    </Button>

                    <Button block>
                        <UndoOutlined /> Reset
                    </Button>
                </span>
   
            </Form>
        </StyledDrawer>
    );
}

export default LocationsFilters;