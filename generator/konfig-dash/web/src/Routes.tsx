// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import AppLayout from './layouts/AppLayout/AppLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/snaptrade" page={SnaptradePage} name="snaptrade" />
      <Private unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={AppLayout}>
          <Route path="/publish" page={PublishPage} name="publish" />
        </Set>
      </Private>
      <Private unauthenticated="login" roles="SuperAdmin">
        <Set wrap={ScaffoldLayout} title="GenerateConfigs" titleTo="generateConfigs" buttonLabel="New GenerateConfig" buttonTo="newGenerateConfig">
          <Route path="/generate-configs/new" page={GenerateConfigNewGenerateConfigPage} name="newGenerateConfig" />
          <Route path="/generate-configs/{id}/edit" page={GenerateConfigEditGenerateConfigPage} name="editGenerateConfig" />
          <Route path="/generate-configs/{id}" page={GenerateConfigGenerateConfigPage} name="generateConfig" />
          <Route path="/generate-configs" page={GenerateConfigGenerateConfigsPage} name="generateConfigs" />
        </Set>
        <Set wrap={ScaffoldLayout} title="GenerateExecutions" titleTo="generateExecutions" buttonLabel="New GenerateExecution" buttonTo="newGenerateExecution">
          <Route path="/generate-executions/new" page={GenerateExecutionNewGenerateExecutionPage} name="newGenerateExecution" />
          <Route path="/generate-executions/{id:Int}/edit" page={GenerateExecutionEditGenerateExecutionPage} name="editGenerateExecution" />
          <Route path="/generate-executions/{id:Int}" page={GenerateExecutionGenerateExecutionPage} name="generateExecution" />
          <Route path="/generate-executions" page={GenerateExecutionGenerateExecutionsPage} name="generateExecutions" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Spaces" titleTo="spaces" buttonLabel="New Space" buttonTo="newSpace">
          <Route path="/spaces/new" page={SpaceNewSpacePage} name="newSpace" />
          <Route path="/spaces/{id:Int}/edit" page={SpaceEditSpacePage} name="editSpace" />
          <Route path="/spaces/{id:Int}" page={SpaceSpacePage} name="space" />
          <Route path="/spaces" page={SpaceSpacesPage} name="spaces" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Organizations" titleTo="organizations" buttonLabel="New Organization" buttonTo="newOrganization">
          <Route path="/organizations/new" page={OrganizationNewOrganizationPage} name="newOrganization" />
          <Route path="/organizations/{id:Int}/edit" page={OrganizationEditOrganizationPage} name="editOrganization" />
          <Route path="/organizations/{id:Int}" page={OrganizationOrganizationPage} name="organization" />
          <Route path="/organizations" page={OrganizationOrganizationsPage} name="organizations" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Memberships" titleTo="memberships" buttonLabel="New Membership" buttonTo="newMembership">
          <Route path="/memberships/new" page={MembershipNewMembershipPage} name="newMembership" />
          <Route path="/memberships/{id:Int}/edit" page={MembershipEditMembershipPage} name="editMembership" />
          <Route path="/memberships/{id:Int}" page={MembershipMembershipPage} name="membership" />
          <Route path="/memberships" page={MembershipMembershipsPage} name="memberships" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
