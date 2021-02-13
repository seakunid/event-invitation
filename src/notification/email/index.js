const axios = require('axios');

const mail = (event, user) => {
    let payload = {
        type_event: event.type_event,
        title_event: event.title_event,
        link_event: event.link_event,
        date: event.date,
        time: event.time,
        fullname: user.fullname,
        email: user.email,
    }

    axios.post('https://seakun-mail-api-v1.herokuapp.com/event-invitation', payload)
        .then(() => console.log(`Success Send Event ${payload.title_event} to ${payload.email}`))
        .catch(err => console.log(err));
}

module.exports = mail
