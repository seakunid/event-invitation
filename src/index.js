const getEvent = require('./event/data');
const getUserEvent = require('./event/user');
const mail = require('./notification/email');
const whatsapp = require('./notification/whatsapp');
const { eventTemplate } = require('./template');

const main = async() => {
    const eventName = 'seakun-x-hrmc';
    const event = await getEvent(eventName);
    const users = await getUserEvent(eventName);
    console.log(event);
    users.forEach(user => {
        mail(event, user);
        whatsapp(user.fullname, user.whatsapp, eventTemplate(event))
    })
};

main()
    .then(() => console.log('success send all event'))
    .catch(err => console.log(err));