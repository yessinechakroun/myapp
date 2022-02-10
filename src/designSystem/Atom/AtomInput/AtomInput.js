import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
AtomInput.propTypes = {
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    isValid: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.any,
    readOnly: PropTypes.bool,
    value: PropTypes.string,
    bsPrefix: PropTypes.string,
    id: PropTypes.any,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    feedback: PropTypes.any,
    feedbackTooltip: PropTypes.any,
    isPassword: PropTypes.bool,
    size: PropTypes.string,
    as: PropTypes.string,
    onKeyPress: PropTypes.any,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
};
AtomInput.defaultProps = {
    disabled: false,
    isInvalid: false,
    isValid: false,
    className: '',
    onChange: null,
    readOnly: false,
    value: null,
    bsPrefix: null,
    id: null,
    placeholder: 'Texte',
    defaultValue: null,
    feedback: null,
    feedbackTooltip: null,
    isPassword: false,
    size: 'meduim',
    type: 'text',
    onKeyPress: null,
    as: 'input',
};
function AtomInput(props) {
    const className = ['default-input'];
    if (props.isInvalid === true) {
        className.push('invalid-input');
    }
    if (props.isValid === true) {
        className.push('valid-input');
    }
    if (props.size === 'meduim') {
        className.push('defaul-meduim-input');
    }
    if (props.size === 'larg') {
        className.push('defaul-larg-input');
    }
    if (props.size === 'small') {
        className.push('defaul-small-input');
    }
    if (props.className) {
        className.push(props.className)
    }
    return (
        <Form.Control
            as={props.as}
            disabled={props.disabled}
            className={className.join(' ')}
            onChange={props.onChange}
            readOnly={props.readOnly}
            value={props.value}
            bsPrefix={props.bsPrefix}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onKeyPress={props.onKeyPress}
            ref={props.ref}
            rows={props.rows}
            maxLength={props.maxLength}
        />
    );
};

export default AtomInput;
