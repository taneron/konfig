import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/automation/datastores
 */
const KonfigStatisticsDatastore = DefineDatastore({
  name: "KonfigStatistics",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    statistics: {
      type: Schema.types.string,
    },
    datetime: {
      type: Schema.types.string,
    },
  },
});

export default KonfigStatisticsDatastore;
