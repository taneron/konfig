import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import GetKonfigStatisticsWorkflow from "../workflows/get_konfig_statistics_workflow.ts";

/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/automation/triggers
 */
const getKonfigStatisticsTrigger: Trigger<
  typeof GetKonfigStatisticsWorkflow.definition
> = {
  type: TriggerTypes.Shortcut,
  name: "Get Konfig Statistics Trigger",
  description: `Trigger "Get Konfig Statistics" workflow`,
  workflow: `#/workflows/${GetKonfigStatisticsWorkflow.definition.callback_id}`,
  inputs: {
    channel: {
      value: TriggerContextData.Shortcut.channel_id,
    },
  },
};

export default getKonfigStatisticsTrigger;
