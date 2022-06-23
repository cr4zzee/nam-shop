import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { CustomBaseEntity } from "../CustomBaseEntity";
import { Product } from "./Product";
@Entity()
export class Color extends CustomBaseEntity {

  @Property()
  name!: string;

  @ManyToOne(() => Product)
  product!: Product;

}