import React from "react";
import { hideModal } from "../../actions";
import { CustomModal } from "../shared/CustomModal";
import { useGlobalState } from '../../hooks/useGlobalState';
import { useActions } from '../../hooks/useActions';

const ModalGenerator: React.FC = () => {
    const modal = useGlobalState(({ modal }) => modal);
    const closeModal = useActions(hideModal, []);

    const handleOnAccept = () => {
        closeModal();
        modal.onAccept();
    };

    return (
        <CustomModal
            visible={modal.visible}
            header={modal.header}
            body={modal.body}
            onAccept={handleOnAccept}
        />
    );
};

export default ModalGenerator;
