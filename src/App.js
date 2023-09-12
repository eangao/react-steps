import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  // const [test, setTest] = useState({ name: "Jonas" });
  // const [test] = useState({ name: "Jonas" });
  // let [step, setStep] = useState(1);

  // always use a const and setter function
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      //don't work
      // setStep(step + 1);
      // setStep(step + 1);

      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
    // step = step + 1;

    // BAD PRACTICE
    // test.name = "Fred";

    // setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("Previous")}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("Next")}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
