import { ChangeEvent, useState } from "react";
import { Person } from "./App";

type Props = {
  id: string;
  personList: Person[];
  setPersonList: React.Dispatch<React.SetStateAction<Person[]>>;
};

const CheckBox = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const { personList, setPersonList } = props;
  const checkHandled = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    const id = e.target.id;
    const idContentNumber = id.charAt(id.length - 1);
    const personNumber = Number(id.slice(8, 9));
    const content = transCheckboxIdToContent(idContentNumber);
    const newPersonList = JSON.parse(JSON.stringify(personList));
    newPersonList[personNumber - 1].status[content].참석여부 = !checked;
    setPersonList(newPersonList);
  };

  type translatedType = {
    [index in string]: string;
  };

  function transCheckboxIdToContent(id: string) {
    const translated: translatedType = {
      1: "content1",
      2: "content2",
      3: "content3",
    };
    return translated[id];
  }

  return (
    <input
      type="checkbox"
      id={props.id}
      className="size-6"
      onChange={(e) => checkHandled(e)}
    />
  );
};
export default CheckBox;
