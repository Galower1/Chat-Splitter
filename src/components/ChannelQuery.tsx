import { useNavigate } from "react-router-dom";
import { useValidateUser } from "../hooks/useValidateUser";

function ChannelQuery() {
  const { inputValue, handleInputChange, loading, isValidUser } =
    useValidateUser();

  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Channel Username"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>{loading && "Loading"}</div>
      {!loading && inputValue && (
        <div>{isValidUser ? "Channel exists" : "Channel does not exist"}</div>
      )}

      <button onClick={() => isValidUser && navigate("/" + inputValue)}>
        Go
      </button>
    </div>
  );
}

export default ChannelQuery;
