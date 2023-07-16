import { Manifest } from "deno-slack-sdk/mod.ts";
import SampleWorkflow from "./workflows/sample_workflow.ts";
import SampleObjectDatastore from "./datastores/sample_datastore.ts";
import GetKonfigStatisticsWorkflow from "./workflows/get_konfig_statistics_workflow.ts";
import KonfigStatisticsDatastore from "./datastores/konfig_statistics_datastore.ts";
import GetKonfigStatisticsScheduledWorkflow from "./workflows/get_konfig_statistics_scheduled_workflow%20.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "konfig-bot",
  description: "Automation for Konfig",
  icon: "assets/logo.png",
  workflows: [
    SampleWorkflow,
    GetKonfigStatisticsWorkflow,
    GetKonfigStatisticsScheduledWorkflow,
  ],
  outgoingDomains: ["dev.konfigthis.com", "api.konfigthis.com"],
  datastores: [SampleObjectDatastore, KonfigStatisticsDatastore],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
  ],
});
