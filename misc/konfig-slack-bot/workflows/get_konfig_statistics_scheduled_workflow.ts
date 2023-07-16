import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { GetKonfigStatisticsFunction } from "../functions/get_konfig_statistics_function.ts";

/**
 * A workflow is a set of steps that are executed in order.
 * Each step in a workflow is a function.
 * https://api.slack.com/automation/workflows
 *
 * This workflow uses interactivity. Learn more at:
 * https://api.slack.com/automation/forms#add-interactivity
 */
const GetKonfigStatisticsScheduledWorkflow = DefineWorkflow({
  callback_id: "get_konfig_statistics_scheduled",
  title: "Get Daily Konfig Statistics",
  description: "Workflow for querying statistics for Konfig everyday",
});

/**
 * Custom functions are reusable building blocks
 * of automation deployed to Slack infrastructure. They
 * accept inputs, perform calculations, and provide
 * outputs, just like typical programmatic functions.
 * https://api.slack.com/automation/functions/custom
 */
const getKonfigStatisticsStep = GetKonfigStatisticsScheduledWorkflow.addStep(
  GetKonfigStatisticsFunction,
  { channel: "C05H84BL519" },
);

/**
 * SendMessage is a Slack function. These are
 * Slack-native actions, like creating a channel or sending
 * a message and can be used alongside custom functions in a workflow.
 * https://api.slack.com/automation/functions
 */
GetKonfigStatisticsScheduledWorkflow.addStep(
  Schema.slack.functions.SendMessage,
  {
    channel_id: "C05H84BL519",
    message: getKonfigStatisticsStep.outputs.message,
  },
);

export default GetKonfigStatisticsScheduledWorkflow;
