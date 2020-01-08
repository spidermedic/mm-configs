/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [

		{
			module: "alert",
		},

		{
			module: "updatenotification",
			position: "top_bar"
		},

		{
			module: "clock",
			position: "top_left"
		},

		{
			module: "calendar",
 			header: "Schedule",
			position: "top_left",
			config: {
				dateFormat: "MM/DD",
				maximumEntries: 10,
				timeFormat: "absolute",
				nextDaysRelative: false,
				urgency: 0,
				fadePoint: 0.75,
				displaySymbol: false,
				calendars: [
					{
						url: "https://calendar.google.com/calendar/ical/doug.martin.rn%40gmail.com/private-417b6e3e6036beced162a82232e51ff5/basic.ics",
					}
				]
			}
		},

		{
			module: "currentweather",
			position: "top_right",
			config: {
				timeFormat: 24,
				showFeelsLike: false,
				location: "Rochester",
				locationID: "5091872",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "8541a64e88d09d1f0ef04c6faeb05c95"
			}
		},

		{
			module: "weatherforecast",
			position: "top_right",
			header: "",
			config: {
				maxNumberOfDays: 7,
				fadePoint: 0.75,
				location: "Rochester",
				locationID: "5091872",  //ID from https://openweathermap.org/city
				appid: "8541a64e88d09d1f0ef04c6faeb05c95",
				colored: true,
			}
		},

		{
			module: 'MMM-MQTT',
			position: 'top_left',
			header: 'Web Sites',
			classes: 'small',
			config: {
				mqttServers: [
					{
						address: '192.168.1.11',	// Server address or IP address
						port: '1883',				// Port number if other than default
						subscriptions: [
							{
								topic: 'sites/status',	// Topic to look for
								label: 'Site Status',		// Displayed in front of value
							},
							{
								topic: 'sites/time',	// Topic to look for
								label: 'Last Checked',		// Displayed in front of value
							},
						]
					}
				],
			}
		},

		{
			module: 'MMM-MQTT',
			position: 'top_left',
			header: 'System Info',
			classes: 'small',
			config: {
				mqttServers: [
					{
						address: '192.168.1.11',	// Server address or IP address
						port: '1883',				// Port number if other than default
						subscriptions: [
							{
								topic: 'mirror/cpuTemp',// Topic to look for
								label: 'CPU Temp',		// Displayed in front of value
							},
							{
								topic: 'mirror/upTime',	// Topic to look for
								label: 'Uptime',		// Displayed in front of value
							},
						]
					}
				],
			}
		},
		
		{
			module: 'MMM-MQTT',
			position: 'top_right',
			header: 'PiHole 1',
			classes: 'small',
			config: {
				mqttServers: [
					{
						address: '192.168.1.11',	// Server address or IP address
						port: '1883',				// Port number if other than default

						subscriptions: [
							{
								topic: 'pihole1/status',	// Topic to look for
								label: 'Status',		// Displayed in front of value
							},
							{
								topic: 'pihole1/queries',// Topic to look for
								label: 'Queries',		// Displayed in front of value
							},
							{
								topic: 'pihole1/blocked',// Topic to look for
								label: 'Blocked',		// Displayed in front of value
							},
							{
								topic: 'pihole1/cpuTemp',// Topic to look for
								label: 'CPU Temp',		// Displayed in front of value
							},
							{
								topic: 'pihole1/upTime',	// Topic to look for
								label: 'Uptime',		// Displayed in front of value
							},
						]
					}
				],
			}
		},

		{
			module: 'MMM-MQTT',
			position: 'top_right',
			header: 'PiHole 2',
			classes: 'small',
			config: {
				mqttServers: [
					{
						address: '192.168.1.11',	// Server address or IP address
						port: '1883',				// Port number if other than default

						subscriptions: [
							{
								topic: 'pihole2/status',	// Topic to look for
								label: 'Status',		// Displayed in front of value
							},
							{
								topic: 'pihole2/queries',// Topic to look for
								label: 'Queries',		// Displayed in front of value
							},
							{
								topic: 'pihole2/blocked',// Topic to look for
								label: 'Blocked',		// Displayed in front of value
							},
							{
								topic: 'pihole2/cpuTemp',// Topic to look for
								label: 'CPU Temp',		// Displayed in front of value
							},
							{
								topic: 'pihole2/upTime',	// Topic to look for
								label: 'Uptime',		// Displayed in front of value
							},
						]
					}
				],
			}
		},
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
