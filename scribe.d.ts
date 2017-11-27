import * as Console2 from "./lib/console2";
import * as expressLogger from "./lib/expressLogger";
import { LogWriter } from "./lib/logWriter";
import { Router } from "express";

declare namespace scribe {

    export interface AddConsoleFunction {
        (config, logWriter): Console2;
    }

    export interface InitWebPanelFunction {
        (): Router;
    }

    export interface ScribeOptions {
        rootPath?: string;
        createDefaultConsole?: boolean;
    }

    export interface ScribeModule {
        console: AddConsoleFunction;
        webPanel: InitWebPanelFunction;
        express: typeof expressLogger;
        Console2: typeof Console2;
        LogWriter: typeof LogWriter;
    }
}

declare function scribe(options?: scribe.ScribeOptions): scribe.ScribeModule;

export = scribe;