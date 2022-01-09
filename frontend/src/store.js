import { init } from "@rematch/core";
import { writeKeyModel } from "./models/writeKeyModel";

const store = init({
  models: {
    writeKeyModel: writeKeyModel
  },
});

export default store;