import { ChangeEvent, useState } from "react";
import { Person } from "./App";

type Props = {
  id: string;
};

const CheckBox = (props: Props) => {
  const [checked, setChecked] = useState(false);

  const checkHandled = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    const id = e.target.id;
    const idLastNumber = Number(id.charAt(id.length - 1));
    // const user = JSON.parse(JSON.stringify(person1checkBoxList));
    // user.status[idLastNumber - 1].content = !checked;
    // console.log(user);
    // setPerson1CheckBoxList(user);
  };

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
