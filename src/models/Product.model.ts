import {Column, DataType, Model, Table} from 'sequelize-typescript'
@Table({
    tableName: 'products',
})
export class Product extends Model{
    @Column({
        type: DataType.STRING(100),
    })
    declare name: string
    @Column({
        type: DataType.FLOAT(6, 0),
    })
    declare price: number
    @Column({
            type: DataType.BOOLEAN,
    })
    declare available: boolean
}
export default Product
