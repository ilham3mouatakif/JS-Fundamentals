const args = process.argv.slice(2); // Slice to remove the first two elements (node path and script path)
if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}