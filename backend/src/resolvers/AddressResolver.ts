import { Query, Resolver, Arg, Mutation, createUnionType } from 'type-graphql';

import { Address } from '../models';

@Resolver()
export class AddressResolver {
    @Query(() => [Address])
    async allAddresses(): Promise<Address[]> {
        return await Address.find();
    }

    @Mutation(() => Address)
    async createAddress(@Arg('name') name: string,
        @Arg('line1') line1: string,
        @Arg('line2') line2: string,
        @Arg('zipcode') zipcode: string,
        @Arg('state') state: string,
        @Arg('city') city: string,
        @Arg('country') country: string
    ): Promise<Address> {
        const address = Address.create({ name, line1, line2, zipcode, state, city, country });
        await address.save();

        return address;
    }
}