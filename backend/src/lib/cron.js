import cron from "cron";
import https from "https"; // replace with axios

const job = new cron.CronJob("*/1 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("GET request sent successfully");
      else console.log("GET request failed", res.statusCode, res.statusMessage);
    })
    .on("error", (e) => console.error("Error while sending request", e));
});

export default job;

/* CRON EXAMPLES 

*     *     *     *     *     command_to_run
|     |     |     |     |
|     |     |     |     └─── Day of the Week (0-7) (Sunday = 0 or 7)
|     |     |     └───────── Month (1 - 12)
|     |     └─────────────── Day of the Month (1 - 31)
|     └───────────────────── Hour (0 - 23)
└─────────────────────────── Minute (0 - 59)

*/
