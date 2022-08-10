import { Provider } from "@nestjs/common"
import { users } from "src/ enity/users.enity"
import  {Connection} from "typeorm"

export const UserProvider: Provider[] =[{
    provide:"USERS_REPOSITORY",
    useFactory:(connection: Connection) =>
    connection.getRepository(users), 
    inject:["DATABASE_CONECTION"]
}]