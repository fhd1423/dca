var CronJob = require('cron').CronJob;
var jobDaily = new CronJob(
	'0 0 * * *',
	function() {
		//look through firebase and look for frequency = daily
        //buy stocks
	},
	null,
	true,
	'America/New_York'
);

var jobWeekly = new CronJob(
	'0 0 * * 0',
	function() {
		//look through firebase and look for frequency = weekly
        //buy stocks
	},
	null,
	true,
	'America/New_York'
);

var jobMonthly = new CronJob(
	'0 0 1 * *',
	function() {
		//look through firebase and look for frequency = monthly
        //buy stocks
	},
	null,
	true,
	'America/New_York'
);