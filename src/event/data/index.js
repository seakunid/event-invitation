const credentials = require('../../../client_secret.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const docsDataEventSeakun = new GoogleSpreadsheet('1IRNy2D4l1-E0uzdaUWYt2IKBtd7ALlXI1Gmaaqx8Qx8');

const getEvent = async (eventName) => {
	let event = {};
	await docsDataEventSeakun.useServiceAccountAuth({
		client_email: credentials.client_email,
		private_key: credentials.private_key,
	});

	await docsDataEventSeakun.loadInfo();
	const sheet = docsDataEventSeakun.sheetsByIndex[0];
	const rows = await sheet.getRows();
	if (rows) {
		for (let i = 0; i < rows.length; i++) {
			if (rows[i]._rawData[4] === eventName) {
				event = {
					type_event: rows[i]._rawData[2],
					title_event: rows[i]._rawData[3],
					link_event: rows[i]._rawData[12],
					date: rows[i]._rawData[8],
					time: rows[i]._rawData[9],
				};
				break;
			}
		}
	}
	return event;
};

module.exports = getEvent;
