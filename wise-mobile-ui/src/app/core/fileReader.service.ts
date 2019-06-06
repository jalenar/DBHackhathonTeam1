import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
let documents = fs.knownFolders.currentApp();
var wiseQuestions = require('./wiseQuestions');

@Injectable()
export class FileReaderService {

    constructor() {
        // console.log('wiseQuestions', wiseQuestions);
     }

    readJSON(path: string): Promise<Object> {
        // let jsonFile = documents.getFile(path);
        // console.log('jsonFile2', jsonFile);
        return new Promise<Object>((resolve, reject) => {
            try {
                resolve(wiseQuestions);
            } catch(err) {
                reject(err);
            }
            // jsonFile.readText().then((content: string) => {
            //     console.log("content9", content);
            //     let data = <Array<Object>>JSON.parse(content);
            //     // let data = [];
            //     resolve(data);
            // })
            //     .catch((err) => {
            //         console.error('err', err);
            //         reject(err);
            //     });
        });
    }
}
