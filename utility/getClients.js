const getClients = async (callback) => {
    const res = await fetch('http://localhost:3000/api/clients');
    const clients = await res.json();
    callback?.(clients);

    return clients;
}

export default getClients;
