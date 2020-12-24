import { Field, ID, ObjectType } from 'type-graphql';

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Address extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number | null = null;

    @Field(() => String)
    @Column()
    name: string = '';

    @Field(() => String)
    @Column()
    line1: string = '';

    @Field(() => String)
    @Column()
    line2: string = '';

    @Field(() => String)
    @Column()
    zipcode: string = '';

    @Field(() => String)
    @Column()
    city: string = '';

    @Field(() => String)
    @Column()
    state: string = '';

    @Field(() => String)
    @Column()
    country: string = '';
}