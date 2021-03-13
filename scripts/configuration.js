var config = {
	load_data: function() {
		data = localStorage.getItem("config_data");

		if (data != null) {
			try {
				config.data = JSON.parse(data);
			}
			catch (SyntaxError) {
				alert("Error: Wrong data structure!");
			}
		}
	},

	save_data: function(new_data) {
		localStorage.setItem("config_data", JSON.stringify(new_data));
	},

	reset_data: function() {
		localStorage.removeItem("config_data");
	},

	data: {
		language: "en",

		dark_mode_enabled: false,

        hints_disabled: false,

		timetable: [
			{
				day: "Monday",
				schedule: []
			},
			{
				day: "Tuesday",
				schedule: []
			},
			{
				day: "Wednesday",
				schedule: []
			},
			{
				day: "Thursday",
				schedule: []
			},
			{
				day: "Friday",
				schedule: []
			}
		],

		periods: [],

		colors: {}

		timetable: [
			{
				day: "Monday",
				schedule: [
					{subject: "Physics", room: 321},
					{subject: "Geography", room:304},
					{subject: "German", room: 329},
					{subject: "History", room: 304},
					{subject: "Biology", room: 113},
					{subject: "Computer Science", room:312}, 
					{subject: "", room: ""},

				]
			},

			{
				day: "Tuesday",
				schedule: [
					{subject: "Computer Science", room: 312},
					{subject: "German", room: 208},
					{subject: "Maths", room: 207},
					{subject: "", room: ""},
					{subject: "English", room: 222},
					{subject: "English", room: 222},
					{subject: "Music",  room: 211},

				]
			},

			{
				day: "Wednesday",
				schedule: [
					{subject: "Geography", room:306},
					{subject: "Religion", room:209},
					{subject: "English", room:203},
					{subject: "Maths", room:111},
					{subject: "Biology", room:113},
					{subject: "Physics", room:321},

				]
			},

			{
				day: "Thursday",
				schedule: [
					{subject: "Physics", room:321},
					{subject: "History", room:304},
					{subject: "Computer Science", room:312},
					{subject: "Computer Science", room:312},
					{subject: "English", room:312},
					{subject: "", room:""},

				]
			},

			{
				day: "Friday",
				schedule: [
					{subject: "Physics", room:321},
					{subject: "Physics", room:321},
					{subject: "German", room:206},
					{subject: "Biology", room:113},
					{subject: "Computer Science", room:216},
					{subject: "English", room:217},

				]
			}
		],



		periods: [
			{start: "09:10", end: "09:40"},
			{start: "09:50", end: "10:20"},
			{start: "10:30", end: "11:00"},
			{start: "11:10", end: "11:40"},
			{start: "12:30", end: "13:00"},
			{start: "13:10", end: "13:40"},
			{start: "13:50", end: "14:20"},
			{start: "15:50", end: "16:20"}
		],



		colors: {
			"Matematik":"179",
			"Fen":"38",
			"Türkçe":"82",
			"Din Kültürü":"208",
			"Beden Eğitimi":"134",
			"Görsel Sanatlar":"0"
		}
	}
};
