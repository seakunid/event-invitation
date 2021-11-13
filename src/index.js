const getEvent = require('./event/data');
const getUsers= require('./event/user');
const mail = require('./notification/email');

const main = async (start, end) => {
    const eventName = 'seakun-x-alvi';
    const event = await getEvent(eventName);
    const users = await getUsers(start, end);
    const url = 'http://localhost:4001/direct-event-invitation';
    users.forEach(async (user) => {
        await mail(event, user, url);
    });
};

const start = 0;
const stop = 1;

main(start, stop)
 .then(() => console.log('success send all event'))
 .catch(e => console.log(e));