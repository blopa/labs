import { memo } from 'react';
import Client from "./Client";

function ClientsList({ clients }) {
    return (
        <ul>
            {clients.map((client, index) => {
                return (
                    <li key={index}>
                        <Client client={client} />
                    </li>
                );
            })}
        </ul>
    );
}

export default memo(ClientsList);
