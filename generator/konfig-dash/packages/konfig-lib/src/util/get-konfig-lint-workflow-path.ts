export const KONFIG_LINT_WORKFLOW_FILE_NAME = 'konfig-lint.yaml'
import * as path from 'path'
export function getKonfigLintWorkflowPath({ repoDir }: { repoDir: string }) {
  const workflowDir = path.join(repoDir, '.github', 'workflows')
  const konfgLintWorkflowPath = path.join(
    workflowDir,
    KONFIG_LINT_WORKFLOW_FILE_NAME
  )
  return { workflowDir, konfgLintWorkflowPath }
}
