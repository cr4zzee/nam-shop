import { Entity, Enum, Property } from "@mikro-orm/core";
import { CustomBaseEntity } from "../CustomBaseEntity";

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User extends CustomBaseEntity {

  @Property()
  name!: string;

  @Property()
  phone_number!: string;

  @Property()
  address!: string;

  @Property()
  code!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property()
  date_of_birth!: Date;

  @Property()
  gender!: string;

  @Enum(() => UserRole)
  role!: UserRole;
}