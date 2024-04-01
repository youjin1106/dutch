import { ChangeEvent, useEffect, useState } from "react";
import CheckBox from "./CheckBox";

export type Person = {
  name: string;
  status: {
    content1: { detailInfo: ""; 참석여부: boolean; money: number };
    content2: { detailInfo: ""; 참석여부: boolean; money: number };
    content3: { detailInfo: ""; 참석여부: boolean; money: number };
  };
};

function App() {
  const [payment, setPayment] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [personList, setPersonList] = useState<Person[]>([
    {
      name: "",
      status: {
        content1: { detailInfo: "", 참석여부: false, money: 0 },
        content2: { detailInfo: "", 참석여부: false, money: 0 },
        content3: { detailInfo: "", 참석여부: false, money: 0 },
      },
    },
    {
      name: "",
      status: {
        content1: { detailInfo: "", 참석여부: false, money: 0 },
        content2: { detailInfo: "", 참석여부: false, money: 0 },
        content3: { detailInfo: "", 참석여부: false, money: 0 },
      },
    },
    {
      name: "",
      status: {
        content1: { detailInfo: "", 참석여부: false, money: 0 },
        content2: { detailInfo: "", 참석여부: false, money: 0 },
        content3: { detailInfo: "", 참석여부: false, money: 0 },
      },
    },
  ]);

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
              <CheckBox id="checkbox1-1" />
            </td>
            <td>
              <CheckBox id="checkbox1-2" />
            </td>
            <td>
              <CheckBox id="checkbox1-3" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person2" />
            </td>
            <td>
              <CheckBox id="checkbox2-1" />
            </td>
            <td>
              <CheckBox id="checkbox2-2" />
            </td>
            <td>
              <CheckBox id="checkbox2-3" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person3" />
            </td>
            <td>
              <CheckBox id="checkbox3-1" />
            </td>
            <td>
              <CheckBox id="checkbox3-2" />
            </td>
            <td>
              <CheckBox id="checkbox3-3" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
