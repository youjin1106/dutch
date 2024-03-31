import { ChangeEvent, useState } from "react";
import CheckBox from "./CheckBox";

export type Person = {
  name: "";
  status: [
    { content: false; money: 0 },
    { content: false; money: 0 },
    { content: false; money: 0 }
  ];
};
type Participant = {
  name: string;
  status: NeedToPayInfo[];
};
type NeedToPayInfo = {
  content: string;
  attendance: boolean;
  money: number;
};

function App() {
  const [payment, setPayment] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [person1checkBoxList, setPerson1CheckBoxList] = useState<Person>({
    name: "",
    status: [
      { content: false, money: 0 },
      { content: false, money: 0 },
      { content: false, money: 0 },
    ],
  });
  const [person2checkBoxList, setPerson2CheckBoxList] = useState<Person>({
    name: "",
    status: [
      { content: false, money: 0 },
      { content: false, money: 0 },
      { content: false, money: 0 },
    ],
  });
  const [person3checkBoxList, setPerson3CheckBoxList] = useState<Person>({
    name: "",
    status: [
      { content: false, money: 0 },
      { content: false, money: 0 },
      { content: false, money: 0 },
    ],
  });

  const getParticipantName = (e: ChangeEvent<HTMLInputElement>) => {
    setParticipants((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPayment((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <input
                type="text"
                className="bg-slate-200 w-10"
                onChange={handleTextChange}
                id="content1"
              />
            </th>
            <th>
              <input
                type="text"
                className="bg-slate-200 w-10"
                onChange={handleTextChange}
                id="content2"
              />
            </th>
            <th>
              <input
                type="text"
                className="bg-slate-200 w-10"
                onChange={handleTextChange}
                id="content3"
              />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person1" />
            </td>
            <td>
              <CheckBox
                person1checkBoxList={person1checkBoxList}
                setPerson1CheckBoxList={setPerson1CheckBoxList}
                id="checkbox1-1"
              />
            </td>
            <td>
              <CheckBox
                person1checkBoxList={person1checkBoxList}
                setPerson1CheckBoxList={setPerson1CheckBoxList}
                id="checkbox1-2"
              />
            </td>
            <td>
              <CheckBox
                person1checkBoxList={person1checkBoxList}
                setPerson1CheckBoxList={setPerson1CheckBoxList}
                id="checkbox1-3"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person2" />
            </td>
            <td>
              <CheckBox
                person2checkBoxList={person1checkBoxList}
                setPerson2CheckBoxList={setPerson2CheckBoxList}
                id="checkbox2-1"
              />
            </td>
            <td>
              <CheckBox
                person2checkBoxList={person1checkBoxList}
                setPerson2CheckBoxList={setPerson2CheckBoxList}
                id="checkbox2-2"
              />
            </td>
            <td>
              <CheckBox
                person2checkBoxList={person1checkBoxList}
                setPerson2CheckBoxList={setPerson2CheckBoxList}
                id="checkbox2-3"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person3" />
            </td>
            <td>
              <CheckBox
                person3checkBoxList={person1checkBoxList}
                setPerson3CheckBoxList={setPerson3CheckBoxList}
                id="checkbox3-1"
              />
            </td>
            <td>
              <CheckBox
                person3checkBoxList={person1checkBoxList}
                setPerson3CheckBoxList={setPerson3CheckBoxList}
                id="checkbox3-2"
              />
            </td>
            <td>
              <CheckBox
                person3checkBoxList={person1checkBoxList}
                setPerson3CheckBoxList={setPerson3CheckBoxList}
                id="checkbox3-3"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
