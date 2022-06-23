import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { CustomBaseEntity } from "../CustomBaseEntity";
import { User } from "./User";

@Entity()
export class Address extends CustomBaseEntity {

  @Property()
  name!: string;

  @ManyToOne(() => User)
  user!: User;

  @Property()
  phone_number!: string;

  @Property()
  address!: string;
}