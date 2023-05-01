import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditGenerateConfigById, UpdateGenerateConfigInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormGenerateConfig = NonNullable<EditGenerateConfigById['generateConfig']>

interface GenerateConfigFormProps {
  generateConfig?: EditGenerateConfigById['generateConfig']
  onSave: (data: UpdateGenerateConfigInput, id?: FormGenerateConfig['id']) => void
  error: RWGqlError
  loading: boolean
}

const GenerateConfigForm = (props: GenerateConfigFormProps) => {
  const onSubmit = (data: FormGenerateConfig) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.generateConfig?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormGenerateConfig> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="konfigyaml"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Konfigyaml
        </Label>
        
          <TextField
            name="konfigyaml"
            defaultValue={props.generateConfig?.konfigyaml}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="konfigyaml" className="rw-field-error" />

        <Label
          name="spaceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Space id
        </Label>
        
          <TextField
            name="spaceId"
            defaultValue={props.generateConfig?.spaceId}
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
        
          <TextField
            name="userId"
            defaultValue={props.generateConfig?.userId}
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

export default GenerateConfigForm
