const credentials = require('../../../client_secret.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const docsDataUserEventSeakun = new GoogleSpreadsheet('1sy0iFHLW4T6TtrERBjocXBR4g4M1cIpo_rFy5vvFy0A');

const getUserEvent = async (eventName) => {
	let users = [];
	await docsDataUserEventSeakun.useServiceAccountAuth({
		client_email: credentials.client_email,
		private_key: credentials.private_key,
	});

	await docsDataUserEventSeakun.loadInfo();
	const sheet = await docsDataUserEventSeakun.sheetsByIndex[1];
	const rows = await sheet.getRows();
	if (rows) {
		rows.forEach((row) => {
			if (row._rawData[1] === eventName) {
				let user = {
					fullname: row._rawData[3],
					email: row._rawData[4],
					whatsapp: row._rawData[5],
				};

				users.push(user);
			}
		});
	}
	return users;
};

module.exports = getUserEvent;
