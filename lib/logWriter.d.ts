import {
    Options as Console2Options
} from "./console2";

export interface Options {
    /**
     * logger options
     */
    logger: string;
}

export class LogWriter {
    /**
     * LogWriter
     *
     * Save console logs on disk
     *
     * @param {string} rootPath
     */
    constructor(rootPath: string);

    /**
     * Attach and init the history property
     */
    initHistory();

    /**
     * Create a dir if it doesn't exist yet
     *
     * @param {string} path
     * @param {Function} callback
     */
    createDir(path: string, callback: Function);

    /**
     * Append content to a file
     *
     * @param {string} pathToFile
     * @param {string} content
     * @param {Function} callback
     */
    appendFile(pathToFile: string, content: string, callback: Function);

    /**
     * Write content into a file (erase old one)
     *
     * @param {string} pathToFile
     * @param {string} content
     * @param {Function} callback
     */
    writeFile(pathToFile: string, content: string, callback: Function);

    /**
     * Save the new file path in history according to the date
     *
     * @param {string} pathToFile
     */
    newFileHistory(pathToFile: string)

    /**
     * Tool, return active user
     *
     * @return {string}
     */
    getUser(): string;

    /**
     *
     * @param {GetPathOptions} options
     * @return {string}
     */
    getPath(options: Options): string;

    /**
     *
     * @param {Options} options
     * @return {string}
     */
    getFile(options: Options): string;

    /**
     *
     * @param {Options} options
     * @return {string}
     */
    path(options: Options): string;

    /**
     * Save a log on disk
     *
     * @param {Console2Options} log
     * @param {Options} options
     */
    save(log: Console2Options, options: Options);

    /**
     *
     * @param {Console2Options} logger
     */
    saveOpt(logger: Console2Options);

    /**
     *
     * @param {Console2.Options} logger
     */
    addLogger(logger: Console2Options);

}

export const folders: Array<string>;
