import { ValidationError } from "./validation-error";

export class Answer {
    value: any
    validationError?:ValidationError
}