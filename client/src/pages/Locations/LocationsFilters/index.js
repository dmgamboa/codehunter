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
import { kebabCase } from "lodash";

import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

import { locationTypes, neighborhoods } from "./constant";
import StyledDrawer from "./styled";

const LocationsFilters = ({
    visible,
    onClose,
    onFinish,
    initialValues
}) => {

    const [form] = Form.useForm();
    const { Option } = Select;

    const renderOptions = (opts) => {
        return opts.map((option) => {
            return (
                <Option
                    key={kebabCase(option)}
                    value={option}
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
                form={form}
                onFinish={onFinish}
                initialValues={initialValues}
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

                <div className="switch">
                    <Form.Item name="bookmarked" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <span className="switch-label">
                        <Icon component={BookmarkIcon} />
                        Bookmarked
                    </span>
                </div>

                <div className="switch">
                    <Form.Item name="visited" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <span className="switch-label">
                        <CheckCircleOutlined />
                        Visited
                    </span>
                </div>

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
                            onClick={() => form.submit()}
                            block
                        >
                            Apply
                        </Button>                        

                    <Button
                        onClick={() => form.resetFields()} 
                        block
                    >
                        <UndoOutlined /> Reset
                    </Button>
                </span>
   
            </Form>
        </StyledDrawer>
    );
}

export default LocationsFilters;