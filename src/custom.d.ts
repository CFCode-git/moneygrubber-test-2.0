type RecordItem = {
  tag: TagItem;
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
}

type TagItem = {
  name: string;
  value: string;
}