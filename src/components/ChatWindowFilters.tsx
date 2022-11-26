import { Filter } from "../types/Filter";

type Props = {
  filters: Filter[];
};

function ChatWindowFilters({ filters }: Props) {
  return <div className="h-6 bg-black" />;
}

export default ChatWindowFilters;
