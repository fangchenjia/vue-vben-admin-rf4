export type PositionItem = {
  _id: string;
  user: {
    avatar: string;
    nickname: string;
    roles: object[];
  };
  createdAt: string;
  map: {
    name: string;
  };
  fishingTackle: {
    dictName: string;
  };
  fishingGroup: {
    dictName: string;
  };
  fish: {
    name: string;
    image: string;
  }[];
  status: string;
};
