import React from "react";
import CustomCheckbox from "../../components/shared/CustomCheckbox";

export default function Home() {
  const data = [
    {
      id: 1,
      title: "Lake house",
      details: "6661 spring street, Columbus 48228-4763",
    },
    {
      id: 2,
      title: "Home",
      details: "6661 spring street, Columbus 48228-4763",
    },
    {
      id: 3,
      title: "Office",
      details: "6661 spring street, Columbus 48228-4763",
    },
    {
      id: 4,
      title: "Shop",
      details: "6661 spring street, Columbus 48228-4763",
    },
    {
      id: 5,
      title: "work place",
      details: "6661 spring street, Columbus 48228-4763",
    },
  ];

  const [checked, setChecked] = React.useState(
    new Array(data.length).fill(false)
  );

  const [selected, setselected] = React.useState([]);
  function handleChange(index) {
    const updatedChecked = checked.map((item, idx) =>
      idx === index ? !item : item
    );
    setChecked(updatedChecked);

    const newselected = [...selected];
    if (updatedChecked[index]) {
      newselected.push(data[index].title);
    } else {
      const titleIndex = newselected.indexOf(data[index].title);
      newselected.splice(titleIndex, 1);
    }
    setselected(newselected);
  }

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-1">
      {data.map((item, index) => (
        <div key={item.id} className="flex flex-col items-start">
          <CustomCheckbox
            onChange={() => handleChange(index)}
            checked={checked[index]}
            title={item.title}
            details={item.details}
            id={item.id}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
