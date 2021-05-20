import { Modal } from "antd";

const ScanModal = ({ error, success, onClose, visible }) => {
    return (
        <Modal centered footer={null} afterClose={onClose} visible={visible}>
            Hello
        </Modal>
    );
};

export default ScanModal;
