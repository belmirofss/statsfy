import { View, Image } from "react-native";
import { List, Text } from "react-native-paper";
import NOT_FOUND_IMG from "../../images/not_found.png";
import { Theme } from "../../theme";

type Props = {
  position: number;
  title: string;
  description?: string;
  imageUrl?: string;
};

export const RankingListItem = ({
  position,
  title,
  description,
  imageUrl,
}: Props) => {
  return (
    <List.Item
      title={() => (
        <Text
          variant="labelLarge"
          style={{
            fontWeight: "bold",
          }}
          numberOfLines={2}
        >
          {title}
        </Text>
      )}
      description={() =>
        description ? (
          <Text variant="labelSmall" numberOfLines={2}>
            {description}
          </Text>
        ) : null
      }
      left={() => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            variant="bodyMedium"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              width: 30,
            }}
          >
            {position}.
          </Text>
          <Image
            style={{
              height: 75,
              width: 75,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: Theme.colors.dark,
            }}
            source={
              imageUrl
                ? {
                    uri: imageUrl,
                  }
                : NOT_FOUND_IMG
            }
          />
        </View>
      )}
    />
  );
};
