const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.urlencoded({ extended: true }));

const TOKEN = "8649857951:AAENZs6EW26Olg5O1S_Ll78aO08jYcG4IPY";
const CHAT_ID = "5979366976";

app.post('/ews-update', (req, res) => {
    const { hujan, tanah, getar, status } = req.body;
    const pesan = `🚨 *LAPORAN EWS LONGSOR* 🚨\n\n` +
                  `💧 Hujan: ${hujan} mm\n` +
                  `🌱 Tanah: ${tanah}%\n` +
                  `📐 Miring: ${getar}°\n` +
                  `📢 STATUS: *${status}*`;

    axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID, text: pesan, parse_mode: 'Markdown'
    });
    res.status(200).send("OK");
});

app.listen(process.env.PORT || 3000);
