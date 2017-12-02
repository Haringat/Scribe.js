import {
    Console2
} from "./console2";
import {
    RequestHandler
} from "express";

export function logger(console: Console2<string>, validate?: RequestHandler): RequestHandler;
