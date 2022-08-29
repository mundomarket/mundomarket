import 'dotenv/config'


export default{
    MONGO_DATABASE:process.env.MONGO_DATABASE || "mundomarket",
    MONGO_USER:process.env.MONGO_USER || "mundomarket",
    MONGO_PASSWORD:process.env.MONGO_PASSWORD || "leodax33558292",
    MONGO_HOST:process.env.MONGO_HOST || "localhost",
    SECRET_JWT : 'secret' 
}