import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditSpaceById, UpdateSpaceInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormSpace = NonNullable<EditSpaceById['space']>

interface SpaceFormProps {
  space?: EditSpaceById['space']
  onSave: (data: UpdateSpaceInput, id?: FormSpace['id']) => void
  error: RWGqlError
  loading: boolean
}

const SpaceForm = (props: SpaceFormProps) => {
  const onSubmit = (data: FormSpace) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.space?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSpace> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.space?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="organizationId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization id
        </Label>
        
          <NumberField
            name="organizationId"
            defaultValue={props.space?.organizationId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="organizationId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SpaceForm
