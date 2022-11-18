import React, { useState, useEffect, useRef } from 'react'

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepsRef = useRef()

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    console.log(newSteps)
    let count = 0
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        }
        count++
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        }
        count++
      }
    }

    return newSteps
  }

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    )

    stepsRef.current = stepsState
    const current = updateStep(currentStep - 1, stepsRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'flex w-full items-center'
            : 'flex items-center'
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 py-3 transition duration-500 ease-in-out  ${
              step.selected
                ? 'border border-green-600 bg-green-600 font-bold text-white '
                : ''
            }`}
          >
            {step.completed ? (
              <span className="text-xl font-bold text-white">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  mt-16 w-32 text-center text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? 'border-green-600' : 'border-gray-300 '
          }  `}
        ></div>
      </div>
    )
  })

  return (
    <div className="mx-4 flex items-center justify-between p-4">
      {stepsDisplay}
    </div>
  )
}
export default Stepper
