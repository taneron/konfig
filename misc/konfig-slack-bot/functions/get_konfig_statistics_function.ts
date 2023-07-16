import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/automation/functions/custom
 */
export const GetKonfigStatisticsFunction = DefineFunction({
  callback_id: "get_konfig_statistics_function",
  title: "Get Konfig Statistics",
  description: "Information about number of users and generation count",
  source_file: "functions/get_konfig_statistics_function.ts",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.types.string,
      },
    },
    required: ["channel"],
  },
  output_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
        description: "The queried statistics",
      },
    },
    required: ["message"],
  },
});

/**
 * SlackFunction takes in two arguments: the CustomFunction
 * definition (see above), as well as a function that contains
 * handler logic that's run when the function is executed.
 * https://api.slack.com/automation/functions/custom
 */
export default SlackFunction(
  GetKonfigStatisticsFunction,
  async ({ inputs, env }) => {
    // "konfig-bot-sandbox" channel ID
    const isDev = inputs.channel === "C05HXSA4D96";

    // make request to /statistics
    const apiUrl = isDev
      ? "http://dev.konfigthis.com:8911/statistics"
      : "https://api.konfigthis.com/statistics";

    const statistics = await (await fetch(apiUrl, {
      headers: { "secret": env["SECRET"] },
    })).json();

    const date = new Date();
    const formattedDate = date.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    const userDiff: number = statistics.userCountDiffSinceLastQuery;
    const generationDiff: number = statistics.generationCountDiffSinceLastQuery;

    const userChangeEmoji = userDiff > 0
      ? ":smile:"
      : (userDiff === 0 ? ":neutral_face:" : ":frowning:");

    const generationChangeEmoji = generationDiff > 0
      ? ":smile:"
      : (generationDiff === 0 ? ":neutral_face:" : ":frowning:");

    const message = `${
      userDiff > 0
        ? `@here (${userDiff} user${userDiff === 1 ? "" : "s"} signed up)\n`
        : ""
    }*Konfig's progress as of ${formattedDate}*
:bust_in_silhouette: Number of users: \`${statistics.userCount}\`
:floppy_disk: SDKs generated: \`${statistics.generationCount}\`
${userChangeEmoji} User change: \`${
      userDiff > 0 ? "+" : userDiff < 0 ? "-" : ""
    }${userDiff}\`
${generationChangeEmoji} SDKs generated change: \`${
      generationDiff > 0 ? "+" : generationDiff < 0 ? "-" : ""
    }${generationDiff}\`

Last 5 users to sign up:
\`\`\`
${JSON.stringify(statistics.last5UsersSignedUp, undefined, 2)}
\`\`\`

Last 5 users to generate SDKs:
\`\`\`
${JSON.stringify(statistics.last5UsersToGenerate, undefined, 2)}
\`\`\`
`;

    return { outputs: { message } };
  },
);
