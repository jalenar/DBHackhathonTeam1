export class CommentObj {
    user: string
    comment: string;
    replys: CommentObj[];
    constructor(comment: string, replys: CommentObj[]) {
        this.comment = comment;
        this.replys = replys
    }
}