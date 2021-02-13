const getEvent = require('./event/data');
const getUserEvent = require('./event/user');
const mail = require('./notification/email');

const main = async() => {
    const eventName = 'seakun-x-hrmc';
    const event = await getEvent(eventName);
    const users = await getUserEvent(eventName);
    users.forEach(user => {
        mail(event, user);
    })
};

main()
    .then(() => console.log('success send all event to all email'))
    .catch(err => console.log(err));