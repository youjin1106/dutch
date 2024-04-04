const Result = ({ personList, payment }) => {
  //이름, total, 사용 내역 map
  const onClickCalculate = () => {
    const content1only = {
      price: payment[0],
      participants: personList.filter(
        (personList) => personList.status.content1.참석여부 === true
      ),
    };

    for (const p of content1only.participants) {
      const money = content1only.price / content1only.participants.length;
      p.status.content1.money += money;
    }
  };

  return (
    <div>
      <button onClick={onClickCalculate}>정산</button>
      <ul>
        {personList.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
