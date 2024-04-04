import { ChangeEvent, useState } from "react";
import CheckBox from "./CheckBox";
import Result from "./Result";

export type Person = {
  name: string;
  status: {
    content1: { detailInfo: ""; 참석여부: boolean; money: number };
    content2: { detailInfo: ""; 참석여부: boolean; money: number };
    content3: { detailInfo: ""; 참석여부: boolean; money: number };
  };
};

// [
//   {
//     name: "",
//     status: {
//       content1: { detailInfo: "", 참석여부: false, money: 0 },
//       content2: { detailInfo: "", 참석여부: false, money: 0 },
//       content3: { detailInfo: "", 참석여부: false, money: 0 },
//     },
//   },
//   {
//     name: "",
//     status: {
//       content1: { detailInfo: "", 참석여부: false, money: 0 },
//       content2: { detailInfo: "", 참석여부: false, money: 0 },
//       content3: { detailInfo: "", 참석여부: false, money: 0 },
//     },
//   },
//   {
//     name: "",
//     status: {
//       content1: { detailInfo: "", 참석여부: false, money: 0 },
//       content2: { detailInfo: "", 참석여부: false, money: 0 },
//       content3: { detailInfo: "", 참석여부: false, money: 0 },
//     },
//   },
// ]

function App() {
  const [payment, setPayment] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [personList, setPersonList] = useState<Person[]>([
    {
      name: "장",
      status: {
        content1: { detailInfo: "", 참석여부: false, money: 0 },
        content2: { detailInfo: "", 참석여부: false, money: 0 },
        content3: { detailInfo: "", 참석여부: false, money: 0 },
      },
    },
    {
      name: "박",
      status: {
        content1: { detailInfo: "", 참석여부: false, money: 0 },
        content2: { detailInfo: "", 참석여부: false, money: 0 },
        content3: { detailInfo: "", 참석여부: false, money: 0 },
      },
    },
    {
      name: "김",
      status: {
        content1: { detailInfo: "", 참석여부: false, money: 0 },
        content2: { detailInfo: "", 참석여부: false, money: 0 },
        content3: { detailInfo: "", 참석여부: false, money: 0 },
      },
    },
  ]);

  // const content1only = {
  //   price: payment[0],
  //   participants: personList.filter(
  //     (personList) => personList.status.content1.참석여부 === true
  //   ),
  // };
  // for (const p of content1only.participants) {
  //   const money = content1only.price / content1only.participants.length;
  //   p.status.content1.money += money;
  // }

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
              <input type="text" className="bg-slate-500 w-10" />
              <br />
              <input
                type="text"
                className="bg-slate-200 w-10"
                onChange={handleTextChange}
                id="content1"
              />
            </th>
            <th>
              <input type="text" className="bg-slate-500 w-10" />
              <br />
              <input
                type="text"
                className="bg-slate-200 w-10"
                onChange={handleTextChange}
                id="content2"
              />
            </th>
            <th>
              <input type="text" className="bg-slate-500 w-10" />
              <br />
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
                id="checkbox1-1"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
            <td>
              <CheckBox
                id="checkbox1-2"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
            <td>
              <CheckBox
                id="checkbox1-3"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person2" />
            </td>
            <td>
              <CheckBox
                id="checkbox2-1"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
            <td>
              <CheckBox
                id="checkbox2-2"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
            <td>
              <CheckBox
                id="checkbox2-3"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={getParticipantName} id="person3" />
            </td>
            <td>
              <CheckBox
                id="checkbox3-1"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
            <td>
              <CheckBox
                id="checkbox3-2"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
            <td>
              <CheckBox
                id="checkbox3-3"
                personList={personList}
                setPersonList={setPersonList}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Result personList={personList} payment={payment} />
    </>
  );
}

export default App;
