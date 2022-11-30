const path = require('path');
const {readFileSync} = require('fs');

export default function handler(req, res) {
    const clientsData = readFileSync(path.resolve(path.join(process.cwd(), 'json'), './clients.json'), 'utf8');
    let clients = JSON.parse(clientsData);

    res.status(200).json(clients.length);
}
