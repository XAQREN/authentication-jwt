const mongoose = require("mongoose");
const MONGOURI = "mongodb+srv://new_user3:eyqmK1OTCR41ioEx@cluster0.bps2t.mongodb.net/local_library?retryWrites=true&w=majority";

const InitiateMongoServer = async() =>{

    try{
        await mongoose.connect(MONGOURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("CONNECTED TO DB!!");
    }
    catch(e){
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;