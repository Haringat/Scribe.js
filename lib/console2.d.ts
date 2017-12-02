import {
    EventEmitter
} from "events";

declare namespace Console2 {
    /**
     * default options for all loggers.
     */
    export interface Options {
        /**
         * Should all loggers print to console by default ? Default true.
         */
        logInConsole?: boolean;
        /**
         * Medium size of the context part of a log message. Used when calculating indent. Default to 45.
         */
        contextMediumSize?: number;
        /**
         * Space between context part and log part. Default to 4.
         */
        spaceSize?: number;
        /**
         * Default colors output for all loggers. Default ['cyan'].
         */
        colors?: color;
        /**
         * Default colors output for tags. Default undefined.
         */
        tagsColors?: color;
        /**
         * Default colors output for time. Default undefined.
         */
        timeColors?: color;
        /**
         * Default colors output for date. Default undefined.
         */
        dateColors?: color;
        /**
         * Default colors output for filename. Default undefined.
         */
        fileColors?: color;
        /**
         * Default colors output for line number. Default undefined.
         */
        lineColors?: color;
        /**
         * Always print tags (even without tag() ). Default false.
         */
        alwaysTags?: boolean;
        /**
         * Always print location (even without file() ). Default false.
         */
        alwaysLocation?: boolean;
        /**
         * Always print time (even without time() ). Default false.
         */
        alwaysTime?: boolean;
        /**
         * Always print date (even without date() ). Default false.
         */
        alwaysDate?: boolean;
        /**
         * Default tags to logs with each request. Default []. See Console.prototype.tag
         */
        defaultTags?: Array<string>;
    }

    export interface Loggers {
        [name: string]: Options;
    }

    export interface LogFunction {
        (loggable: any);
    }

    export type color = string | Array<string>;

    export interface TagObject {
        /**
         * The tag
         */
        msg: string;

        /**
         * colors
         */
        colors: color;
    }

    export type tag = string | TagObject;

    interface Console2Static {

        new<T extends string>(opt?: Console2.Options): Console2<T>;

        prototype: Console2Prototype;
    }

    type Console2<T extends string> = Console2Instance<T> & Record<T, LogFunction>;

    interface Console2Instance<T extends string> extends Console2Prototype {

        opt: Console2.Options;
        loggers: Record<T, Console2.Options>;

    }

    interface Console2Prototype extends EventEmitter {

        /**
         * Log the time
         *
         * @param {String|Number} time time if need to override.
         */
        time(time?: string | number): this;

        /**
         * Log the date
         */
        date(): this;

        /**
         * Add tags
         */
        tag(...tags: Array<Console2.tag>): this;

        /**
         * Log the file name + line
         * You could force the filename and line by passing args.
         * @param {string} file filename
         * @param {string|number} line line number
         */
        file(file?: string, line?: string | number): this;

        /**
         * @inheritDoc
         */
        f: typeof Console2.prototype.file;

        /**
         *
         * Build the args string
         * ie. the string composed with the arguments send to the logger
         *
         * @param log
         * @param offset
         * @param context
         * @return {{msg: string, raw: string}}
         */
        buildArgs(log, offset, context): {msg: string, raw: string};

        buildContext(log, opt): {result: string, length: number};

        /**
         *
         * Create a new logger
         * You can then use it with console.myNewLogger
         *
         * @param {string} name
         * @param {Console2.color} colors
         * @param {Console2.Options} opt
         */
        addLogger(name: string, colors?: Console2.color, opt?: Console2.Options);

    }

}

declare const Console2: Console2.Console2Static;

export = Console2;