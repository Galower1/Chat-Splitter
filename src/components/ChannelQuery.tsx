import { useValidateUser } from "../hooks/useValidateUser";

function ChannelQuery() {
  const { inputValue, handleInputChange, loading, isValidUser } =
    useValidateUser();

  return (
    <div>
      <input
        type="text"
        placeholder="Channel Username"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>{loading && "Loading"}</div>
      {!loading && isValidUser && (
        <div>{isValidUser ? "Channel exists" : "Channel does not exist"}</div>
      )}
    </div>
  );
}

export default ChannelQuery;
