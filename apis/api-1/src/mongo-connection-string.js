const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_DATABASE,
  MONGO_SERVER,
  MONGO_PORT = 27017
} = process.env;

export default function connectionString ({
  database = MONGO_DATABASE,
  server = MONGO_SERVER,
  userName = MONGO_INITDB_ROOT_USERNAME,
  password = MONGO_INITDB_ROOT_PASSWORD,
  port = MONGO_PORT
} = {}){
  return `mongodb://${userName}:${password}@${server}:${port}/${database}?authSource=admin`;
};
