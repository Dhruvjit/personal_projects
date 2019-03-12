export class Message {

    avatar: string;
    content: string;
    timestamp: string;
 
    constructor( avatar: string, content: string, timestamp: string ){

        this.avatar = avatar;
        this.content = content;
        this.timestamp = timestamp;

    }
}
