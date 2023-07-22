import { RankingListItem } from "./RankingListItem";

type RankingListItem = {
  position: number;
  title: string;
  description?: string;
  imageUrl?: string;
};

type Props = {
  data: RankingListItem[];
};

export const RankingList = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => (
        <RankingListItem
          position={item.position}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          key={item.title}
        />
      ))}
    </>
  );
};
