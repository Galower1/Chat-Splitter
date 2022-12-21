import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNodesStore } from "../hooks/stores/useNodesStore";
import { standardFilters } from "../utils/standardFilters";

type Inputs = {
  title: string;
  isFirstMsg: boolean;
  isMod: boolean;
  isSubbed: boolean;
  isVip: boolean;
  isSubGifter: boolean;
};

function ModifyChatForm() {
  const { addNode } = useNodesStore();
  const { handleSubmit, register } = useForm<Inputs>();

  const modifyChat: SubmitHandler<Inputs> = ({ title, ...selectedFilters }) => {
    const filters = Object.keys(selectedFilters).map(
      (selected) => standardFilters[selected]
    );
    addNode({ title, filters });
  };

  return (
    <form
      className="flex flex-col z-10 absolute text-black"
      onSubmit={handleSubmit(modifyChat)}
    >
      <input {...register("title")} />
      <input type="checkbox" {...register("isFirstMsg")} />
      <input type="checkbox" {...register("isMod")} />
      <input type="checkbox" {...register("isSubbed")} />
      <input type="checkbox" {...register("isVip")} />
      <input type="checkbox" {...register("isSubGifter")} />
      <button type="submit">Modify</button>
    </form>
  );
}

export default ModifyChatForm;
