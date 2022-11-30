const path = require('path');
const {readFileSync} = require('fs');

export default function handler(req, res) {
    const query = req.query;
    const { quantity } = query;
    const clientsData = readFileSync(path.resolve(path.join(process.cwd(), 'json'), './clients.json'), 'utf8');
    let clients = JSON.parse(clientsData);
    if (quantity > 0) {
        clients = clients.splice(0, quantity);
    }

    res.status(200).json(clients);
}
