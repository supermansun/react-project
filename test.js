const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
console.log("starting>>>>>>>>>>>>>>>>>>");
console.log(TARGET);