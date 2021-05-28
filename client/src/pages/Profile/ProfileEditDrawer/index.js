import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";

import firstLast from "../../../util/firstLastWords";

import { StyledDrawer } from "./styled";

const ProfileEditDrawer = ({ visible, onClose, initialValues, onFinish }) => {

    const [form] = Form.useForm();
    const [img, setImg] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        !isJpgOrPng && message.error("Please upload either a jpg or png file.");

        const isLessThan2MB = file.size / 1024 / 1024 < 2;
        !isLessThan2MB && message.error("Please upload a file smaller than 2MB");

        return isJpgOrPng && isLessThan2MB;
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file && beforeUpload(file)) {
            setAvatar(file);
            setImg(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        const currentValues = {...form.getFieldsValue(), avatar};
        if (currentValues !== initialValues) {
            form.submit();
        }
        onClose();
    };

    const handleFinish = (values) => {
        let newValues = {...values};
        const formattedName = firstLast(newValues.name);
        newValues.name = {first: formattedName.firstName, last: formattedName.lastName};
        onFinish({fields: JSON.stringify(newValues), avatar});
    };

    useEffect(() => {
        if (visible) {
            form.setFieldsValue(initialValues);
            if (initialValues.avatar) {
                setImg(initialValues.avatar);
                setAvatar(initialValues.avatar);
            }
        }
    }, [visible]);

    return (
        <StyledDrawer
            width="auto"
            visible={visible}
            onClose={onClose}
            closable={false}
            title={
                <>
                    <EditOutlined /> Edit Profile
                </>
            }
            footer={
                <div className="buttons">
                    <Button block type="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button block type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            }
        >
            <Form form={form} initialValues={initialValues} onFinish={handleFinish}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
            
            <div className="avatar-upload">
                <input accept="image/jpeg, image/png" type="file" id="avatar"  onChange={handleAvatarChange}/>
                <label htmlFor="avatar" className="upload-btn">
                    <PlusCircleOutlined />
                    <div>Upload Avatar</div>
                </label>
                {img && <img className="avatar" src={img}/>}
            </div>
        </StyledDrawer>
    );
};

export default ProfileEditDrawer;
