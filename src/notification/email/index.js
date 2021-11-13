const axios = require('axios');

const mail = async (event, user, url) => {
    const payload = {
        type_event: event.type_event,
        title_event: event.title_event,
        link_event: event.link_event,
        narasumber: event.narasumber,
        url_banner: event.url_banner,
        date: event.date,
        time: event.time,
        fullname: user.fullname,
        email: user.email,
    }
    try {
        await axios.post(url, payload);
        console.log(`Success Send Event to ${payload.email}`)
    } catch (err) {
        console.log(err);
    }
}

module.exports = mail
