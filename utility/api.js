export const getClients = async (quantity = 0) => {
    const params = new URLSearchParams({ quantity });
    const res = await fetch(`http://localhost:3000/api/clients?${params}`);
    return await res.json();
};

export const getClientsTotal = async () => {
    const res = await fetch('http://localhost:3000/api/clients/total');
    return await res.json();
};
