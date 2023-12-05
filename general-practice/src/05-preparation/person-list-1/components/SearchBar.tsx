import { useState } from "react";

interface Props {
  onChangeText: (term: string) => void;
}

const SearchBar = ({ onChangeText }: Props): JSX.Element => {
  const [term, setTerm] = useState("");

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    onChangeText(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={handleChangeTerm}
        placeholder="Search customer"
      />
    </div>
  );
};

export default SearchBar;
