const eventTemplate = (event) => {
    return "Dear Seakun Mate,\n"
        + "Ikan Pari \n"
        + "Ikan Tuna \n"
        + "Sabtu ini \n"
        + "Jangan lupa webinar ya \n\n"
        + `Terimakash telah mendaftar webinar "A mismatch between your course and your jobdoesn't mean your future is bleak" yang diselenggarakan oleh Seakun.id X HR Migas Community pada ${event.date} pukul ${event.time} \n\n`
        + "Terlampir link meeting sebagai berikut: \n"
        + `${event.link_event} \n\n`
        + "Cara join webinarnya, cukup buka browser lalu klik link tersebut 5 menit sebelum acara dimulai. \n\n"
        + "See you online! \n"
        + "Jika ada kendala dalam webinar, silahkan menghubungi pihak kami di partnership@seakun.id \n"
        + "Regards, \n"
        + "Seakun.id"
}

module.exports = { 
    eventTemplate
};