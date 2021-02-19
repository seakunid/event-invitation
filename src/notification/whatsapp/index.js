const TOKEN = 'b3fHjFysjuKgmseHeVTkWbhh8XqDgArtunEp1Jtck1MLImYbOv'
const URL = 'http://ruangwa.com/v2/api/send-message.php'
const axios = require('axios')
const FormData = require('form-data')

const whatsapp = (fullname, phone, eventTemplate) => {
    let data = new FormData();
    data.append('token', TOKEN);
    data.append('phone', phone);
    data.append('message', eventTemplate);

    let config = {
        method: 'post',
        url: URL,
        headers: { 
            ...data.getHeaders()
        },
        data : data
    };
    
    axios(config)
    .then(() => {
        console.log(`Success Send Event to Whatsapp ${fullname}`)
    })
    .catch(error => {
        console.log(error.message);
    });
}

module.exports = whatsapp
