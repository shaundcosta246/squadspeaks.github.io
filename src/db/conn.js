const mongoose = require("mongoose");
const localdatabase = "mongodb://127.0.0.1:27017/Hoppers";
const conUri = `mongodb+srv://shaundcosta246:jmFHGG9Y6EPFp7ah@cluster0.vpeqywk.mongodb.net/hoppers?retryWrites=true&w=majority`
mongoose.connect(conUri, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("database connected");
}).catch((error) => {
    console.log(error)
})
