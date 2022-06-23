import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { CustomBaseEntity } from "../CustomBaseEntity";
import { Category } from "./Category";

@Entity()
export class Product extends CustomBaseEntity {

  @Property()
  name!: string;

  @Property()
  display_name!: string;

  @Property()
  slug!: string;

  @Property()
  status!: string;

  @ManyToOne(() => Category)
  categories!: Category[];
}