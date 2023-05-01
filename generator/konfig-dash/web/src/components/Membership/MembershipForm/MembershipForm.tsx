import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditMembershipById, UpdateMembershipInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormMembership = NonNullable<EditMembershipById['membership']>

interface MembershipFormProps {
  membership?: EditMembershipById['membership']
  onSave: (data: UpdateMembershipInput, id?: FormMembership['id']) => void
  error: RWGqlError
  loading: boolean
}

const MembershipForm = (props: MembershipFormProps) => {
  const onSubmit = (data: FormMembership) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.membership?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMembership> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="membership-role-0"
            name="role"
            defaultValue="Owner"
            defaultChecked={props.membership?.role?.includes('Owner')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Owner
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="membership-role-1"
            name="role"
            defaultValue="Admin"
            defaultChecked={props.membership?.role?.includes('Admin')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Admin
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="membership-role-2"
            name="role"
            defaultValue="User"
            defaultChecked={props.membership?.role?.includes('User')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            User
          </div>
        </div>
          
        

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="organizationId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization id
        </Label>
        
          <NumberField
            name="organizationId"
            defaultValue={props.membership?.organizationId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="organizationId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="userId"
            defaultValue={props.membership?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="invitedName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Invited name
        </Label>
        
          <TextField
            name="invitedName"
            defaultValue={props.membership?.invitedName}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="invitedName" className="rw-field-error" />

        <Label
          name="invitedEmail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Invited email
        </Label>
        
          <TextField
            name="invitedEmail"
            defaultValue={props.membership?.invitedEmail}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="invitedEmail" className="rw-field-error" />

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

export default MembershipForm
