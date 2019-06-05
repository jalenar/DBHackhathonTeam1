

export class Thread { 
    title: string;
    description: string;
    upVotes:number;
    downVotes:number;
    numberOfReplys:number;
    constructor(title: string, description: string,
        upVotes:number, downVotes:number,
        numberOfReplys:number){
            this.title = title;
            this.description = description;
            this.upVotes = upVotes;
            this.downVotes = downVotes;
            this.numberOfReplys = numberOfReplys;
        }
}