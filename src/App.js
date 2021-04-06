import { useState } from "react";
import "./styles.css";
import { Chip, Tooltip } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";

export default function App() {
  const [defaultState, setDefaultState] = useState([
    "foo",
    "baar",
    "john",
    "doe",
    "so"
  ]);
  const [objState, setObjState] = useState([
    { text: "bencho", value: "choddas" },
    { text: "sameer", value: "fuddi" }
  ]);

  const handleDeleteChip = (chip, index) => {
    const newReceiver = objState.filter((receiver) => {
      return receiver.text !== chip.text;
    });
    setObjState(newReceiver);
    console.log(chip, index, "@@test");
  };

  const chipHandler = ({ chip, className, handleClick, handleDelete }, key) => (
    <Tooltip title={chip.text}>
      <Chip
        className={className}
        label={chip.value}
        key={chip.text}
        onDelete={handleDelete}
      />
    </Tooltip>
  );

  return (
    <div className="App">
      <ChipInput
        value={objState}
        chipRenderer={chipHandler}
        onDelete={(chip, index) => handleDeleteChip(chip, index)}
      />
    </div>
  );
}
