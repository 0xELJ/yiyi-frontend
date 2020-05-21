import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../actions";
import { ConfirmModalState } from "../../types/ConfirmModalState";
import { ConfirmModal } from "./ConfirmModal";

const ModalGenerator: React.FC<{ modal: ConfirmModalState, hideModal(): void }> = props => {
    const handleOnAccept = () => {
        props.hideModal();
        props.modal.onAccept();
    };

    return (
        <ConfirmModal
            visible={props.modal.visible}
            header={props.modal.header}
            body={props.modal.body}
            acceptLabel={props.modal.acceptLabel}
            onAccept={handleOnAccept}
        />
    );
};

const mapStateToProps = (state: { modal: ConfirmModalState }) => {
    return { modal: state.modal };
};

export default connect(mapStateToProps, { hideModal })(ModalGenerator);
