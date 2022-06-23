import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from '../CustomBaseEntity';
import { Color } from './Color';
import { Product } from './Product';
@Entity()
export class File extends CustomBaseEntity {
  @Property()
  path!: string;

  @ManyToOne(() => Color)
  color: Color;

  @ManyToOne(() => Product)
  product: Product;
}
