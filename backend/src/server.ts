import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';

import express from 'express';

import { buildSchema } from 'type-graphql';

import { init_db } from './db/database';
import { AddressResolver } from './resolvers/AddressResolver';

const main = async () => {
    await init_db();
    console.log('Database loaded.');

    const schema = await buildSchema({
        resolvers: [AddressResolver],
    });

    const apolloServer = new ApolloServer({ schema });
    const app = express();
    apolloServer.applyMiddleware({ app });
    app.listen(
        4000,
        () => console.log(`Server started on http://localhost:4000${apolloServer.graphqlPath}`),
    );
};

main();