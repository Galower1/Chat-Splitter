import { useValidateUser } from "../hooks/useValidateUser";

function ChannelQuery() {
  const { inputValue, handleInputChange, loading, data } = useValidateUser();

  return (
    <div>
      <input
        type="text"
        placeholder="Channel Username"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>{loading && "Loading"}</div>
      {!loading && data && (
        <div>
          {data?.status === 200 ? "Channel exists" : "Channel does not exist"}
        </div>
      )}
    </div>
  );
}

export default ChannelQuery;
