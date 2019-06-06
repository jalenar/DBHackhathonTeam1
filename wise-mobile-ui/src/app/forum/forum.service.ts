import { Injectable } from '@angular/core';
import { Thread } from './model/thread';

@Injectable()
export class ForumService {

    thread: Thread;

    constructor() { }


    setThread(thread: Thread) {
        this.thread = thread;
    }



}