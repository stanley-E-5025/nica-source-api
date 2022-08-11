import { Provider } from "@nestjs/common"
import { videos } from "src/ enity/videos.enity"
import  {Connection} from "typeorm"

export const VideoProvider: Provider[] =[{
    provide:"VIDEOS_REPOSITORY",
    useFactory:(connection: Connection) =>
    connection.getRepository(videos), 
    inject:["DATABASE_CONECTION"]
}]