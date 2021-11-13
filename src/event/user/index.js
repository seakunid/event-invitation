const credentials = require('../../../client_secret.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const docsDataUsers = new GoogleSpreadsheet('1bRXKTlboGMqSq8-ryBBLJVxoHSEvHf5kdoQnEPVcpGU');

const getUsers = async (start, end) => {
	const users = [];
	await docsDataUsers.useServiceAccountAuth({
		client_email: credentials.client_email,
		private_key: credentials.private_key,
	});

	await docsDataUsers.loadInfo();
	const sheet = await docsDataUsers.sheetsByIndex[0];
	const rows = await sheet.getRows();
	if (!rows) {
		return users;		
	}
	for (let i = start; i <= end; i++) {
		const user = {
			fullname: rows[i]._rawData[1],
			email: rows[i]._rawData[2],
			whatsapp: rows[i]._rawData[3],
		}
		users.push(user);
	}
	return users;
};

module.exports = getUsers;
