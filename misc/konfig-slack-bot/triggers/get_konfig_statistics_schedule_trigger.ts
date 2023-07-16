import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";
import GetKonfigStatisticsScheduledWorkflow from "../workflows/get_konfig_statistics_scheduled_workflow%20.ts";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(17, 0, 0); // Set time to 5 PM (17:00)

/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/automation/triggers
 */
const getKonfigStatisticsScheduleTrigger: Trigger<
  typeof GetKonfigStatisticsScheduledWorkflow.definition
> = {
  type: TriggerTypes.Scheduled,
  name: "Get Konfig Statistics Schedule Trigger",
  description: `Trigger "Get Konfig Statistics" workflow on a schedule`,
  workflow:
    `#/workflows/${GetKonfigStatisticsScheduledWorkflow.definition.callback_id}`,
  schedule: {
    start_time: tomorrow.toString(),
    frequency: {
      type: "daily",
    },
  },
};

export default getKonfigStatisticsScheduleTrigger;
