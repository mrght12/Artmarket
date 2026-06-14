const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let data = {
    users: [{ id: 1, username: "mrght12", isAdmin: true }],
    lots: [
        { id: 1, title: "🍕 Пепперони", desc: "40см", emoji: "🍕", currentBid: 25, leaderName: "—", creatorName: "mrght12", endTime: Date.now() + 240000, isActive: true },
        { id: 2, title: "🍣 Царский сет", desc: "24 сашими", emoji: "🍣", currentBid: 25, leaderName: "—", creatorName: "mrght12", endTime: Date.now() + 300000, isActive: true }
    ],
    shop: [{ id: 1, name: "🎨 Арт", desc: "Иллюстрация", price: 25, emoji: "🖼️", sellerName: "mrght12" }],
    bans: [],
    purchases: []
};

app.get('/api/data', (req, res) => res.json(data));
app.post('/api/data', (req, res) => { data = req.body; res.json({ ok: true }); });

app.listen(3000, () => console.log('Сервер запущен'));
