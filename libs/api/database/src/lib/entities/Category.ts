import { Entity, Property } from "@mikro-orm/core";
import { CustomBaseEntity } from "../CustomBaseEntity";

@Entity()
export class Category extends CustomBaseEntity {

  @Property()
  name!: string;

  @Property()
  display_name!: string;

  @Property()
  slug!: string;

  @Property()
  status!: string;
}