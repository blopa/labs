import { memo } from 'react';
import Image from 'next/image';

function Client({ client }) {
    return (
        <section>
            <header>
                <h2>{client.name}</h2>
                <p>{client.title}</p>
            </header>
            <article>
                {client.quote && <aside>{client.quote}</aside>}
                {client.nationality && <p>{client.nationality}</p>}
                <Image
                    src={client.avatar}
                    alt={`Picture of ${client.name}`}
                    width={50}
                    height={50}
                />
            </article>
        </section>
    );
}

export default memo(Client);
