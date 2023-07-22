import { View } from "react-native";
import { Top3Item } from "./Top3Item";

type TopItem = {
  title: string;
  imageUrl?: string;
  description?: string;
};

type Props = {
  data: TopItem[];
};

export const Top3 = ({ data }: Props) => {
  const [first, second, third] = data;

  return (
    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
      <Top3Item
        position={"second"}
        title={second.title}
        description={second.description}
        imageUrl={second.imageUrl}
        key={second.title}
      />

      <Top3Item
        position={"first"}
        title={first.title}
        description={first.description}
        imageUrl={first.imageUrl}
        key={first.title}
      />

      <Top3Item
        position={"third"}
        title={third.title}
        description={third.description}
        imageUrl={third.imageUrl}
        key={third.title}
      />
    </View>
  );
};
