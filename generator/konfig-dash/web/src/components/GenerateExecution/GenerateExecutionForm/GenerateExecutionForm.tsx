import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditGenerateExecutionById, UpdateGenerateExecutionInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormGenerateExecution = NonNullable<EditGenerateExecutionById['generateExecution']>

interface GenerateExecutionFormProps {
  generateExecution?: EditGenerateExecutionById['generateExecution']
  onSave: (data: UpdateGenerateExecutionInput, id?: FormGenerateExecution['id']) => void
  error: RWGqlError
  loading: boolean
}

const GenerateExecutionForm = (props: GenerateExecutionFormProps) => {
  const onSubmit = (data: FormGenerateExecution) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.generateExecution?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormGenerateExecution> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="s3Key"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          S3 key
        </Label>
        
          <TextField
            name="s3Key"
            defaultValue={props.generateExecution?.s3Key}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="s3Key" className="rw-field-error" />

        <Label
          name="spaceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Space id
        </Label>
        
          <NumberField
            name="spaceId"
            defaultValue={props.generateExecution?.spaceId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="spaceId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="userId"
            defaultValue={props.generateExecution?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

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

export default GenerateExecutionForm
