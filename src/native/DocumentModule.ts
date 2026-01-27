import { NativeModules } from "react-native";

const { DocumentModule } = NativeModules;

export default {
    ping: async (): Promise<string> => {
        return await DocumentModule.ping();
    },
};
