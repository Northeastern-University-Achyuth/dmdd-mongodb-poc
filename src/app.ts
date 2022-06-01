import { connectDB } from "./connectDB";
import { User } from "./schema/schema";
import jsonData from "./data/data.json";

const function1 = async () => {
  await connectDB();
};

function1();

User.insertMany(jsonData)
  .then((customers) => {
    console.log("Customers Added: ", customers);
  })
  .catch((e) => console.log(e));

User.aggregate;
