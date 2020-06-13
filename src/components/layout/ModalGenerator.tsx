import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../actions";
import { CustomModalState } from "../../types/states/CustomModalState";
import { CustomModal } from "../shared/CustomModal";

const ModalGenerator: React.FC<{ modal: CustomModalState, hideModal(): void }> = props => {
    const handleOnAccept = () => {
        props.hideModal();
        props.modal.onAccept();
    };

    return (
        <CustomModal
            visible={props.modal.visible}
            header={props.modal.header}
            body={props.modal.body}
            onAccept={handleOnAccept}
        />
    );
};

const mapStateToProps = (state: { modal: CustomModalState }) => {
    return { modal: state.modal };
};

export default connect(mapStateToProps, { hideModal })(ModalGenerator);
