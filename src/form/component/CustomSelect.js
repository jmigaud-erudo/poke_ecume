import React from "react";
import Select from "react-select/base";

export function CustomSelect({
    id,
    name,
    options,
    isMulti,
    touched,
    error,
    isClearable,
    backspaceRemovesValue,
    value,
    defaultValue,
    placeholder,
    label,
    isDisabled = false }) {

    return (
        <div className="input-field-wrapper">
            {label && (
                <h3 className="input-label" htmlFor={name} error={error}>
                    {label}
                </h3>
            )}

            <Select
                id={id}
                placeholder={placeholder}
                options={options}
                defaultValue={defaultValue}
                value={value}
                // onChange={handleChange}
                // onBlur={handleBlur}
                touched={touched}
                error={error}
                isMulti={isMulti}
                isDisabled={isDisabled}
                isClearable={isClearable}
                backspaceRemovesValue={backspaceRemovesValue}
                components={{ ClearIndicator: null }}
            />

            {touched && error ? <p className="error-text">{error}</p> : null}
        </div>
    );
}