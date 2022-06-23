import { Entity, ManyToOne, OneToOne, Property } from "@mikro-orm/core";
import { CustomBaseEntity } from "../CustomBaseEntity";
import { Address } from "./Address";
import { Product } from "./Product";
import { User } from "./User";
@Entity()
export class Order extends CustomBaseEntity {

  @OneToOne(() => User)
  user!: User;

  @ManyToOne(() => Product)
  product!: Product;

  @OneToOne(() => Address)
  address: Address;

  @Property()
  quantity: number;
  
  @Property()
  status: string;
}