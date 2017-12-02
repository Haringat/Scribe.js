import {
    Router
} from "express";
import {
    Console2
} from "./console2";
import {
    LogWriter
} from "./logWriter";

declare namespace webPanel {
    export interface Console {
        console: Console2<string>;
        logWriter: null | LogWriter;
    }
}

/**
 *
 * @param {Array<webPanel.Console>} consoles
 * @return {Router}
 */
declare function webPanel(consoles: Array<webPanel.Console>): Router;

export = webPanel;