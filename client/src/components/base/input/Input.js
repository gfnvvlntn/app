import React from "react";
import styled from "styled-components";

const Input = (props) => {
    return (
        <FieldWrapper>

            <Field type="text" {...props}/>
        </FieldWrapper>
    )
}

Input.displayName = 'Input'

export default React.memo(Input)

const FieldWrapper = styled('div')`
  width: 100%;
  border: 1px solid #575C7C;
  display: flex;
  border-radius: 10px;
  padding: 10px;
`

const Field = styled('input')`
  border: none;
  outline: none;
`