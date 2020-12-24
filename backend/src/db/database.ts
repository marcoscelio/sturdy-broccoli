import { createConnection } from 'typeorm';

import { Address } from '../models';

export const init_db = async () => {
    const connection = await createConnection();
    await connection.dropDatabase();
    await connection.synchronize();

    for (let i = 0; i < 10; i++) {
        const address = new Address();
        address.name = 'name ' + i;
        address.line1 = 'line1 ' + i;
        address.line2 = 'line2 ' + i;
        address.zipcode = '12345-' + i;
        address.state = 'state ' + i;
        address.city = 'city ' + i;
        address.country = 'country ' + i;
        await address.save();
    }
}