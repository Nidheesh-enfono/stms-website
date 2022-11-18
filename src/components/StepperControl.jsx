import { Button } from '@/components/Button'

export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container col-span-full mt-4 mb-8">
      {/* {currentStep === steps.length && (
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white`}
        >
          Back
        </button>
      )} */}

      {/* <button
        onClick={() => handleClick('next')}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button> */}
      <div className="col-span-full">
        <Button
          onClick={() => handleClick('next')}
          variant="solid"
          style={{ backgroundColor: '#333333' }}
          className="w-full"
        >
          <span>{currentStep >= steps.length ? 'Confirm' : 'Next'}</span>
        </Button>
      </div>
    </div>
  )
}
