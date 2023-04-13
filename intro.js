// let message: string = "Hello, World!";
// let age: number = 30;
// let isMarried: boolean = true;
// let hobbies: string[] = ["reading", "traveling", "swimming"];
function sanitizeInput(str) {
    return sanitize(str);
}
// sanitizeInput("Chinya")
// Create a sanitized input
var userInput = sanitizeInput(getInput());
// Can still be re-assigned with a string though
userInput = "new input";
