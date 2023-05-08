import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {KTSVG} from '../../../../helpers'
import {StepperComponent} from '../../../../assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {UserRegistrationSchemas, IRegistration, inits} from './UserRegistrationHelper'

const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(UserRegistrationSchemas[0])
  const [initValues] = useState<IRegistration>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(UserRegistrationSchemas[stepper.current.currentStepIndex - 1])

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber)
  }

  const submitStep = (values: IRegistration, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber)

    setCurrentSchema(UserRegistrationSchemas[stepper.current.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='card'>
      <div className='card-body'>
      <div
        ref={stepperRef}
        // className='stepper stepper-pills stepper-row d-flex flex-column flex-xl-column flex-row-fluid'
        className='stepper stepper-pills d-flex flex-column pt-15'

        id='kt_create_account_stepper'
      >
        <div className='stepper-nav mb-5 justify-content-center'>
          {/* begin::Step 1*/}
          <div className='stepper-item current' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper align-items-center '>
              {/* begin::Icon*/}
              <div className='stepper-icon d-flex w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>1</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Basic Information</h3>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 1*/}

          {/* begin::Step 2*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>2</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Bank Details</h3>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 2*/}

          {/* begin::Step 3*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>3</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Acadmic Details</h3>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 3*/}

          {/* begin::Step 4*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>4</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Completed</h3>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 4*/}
        </div>

        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
          {() => (
            <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                <Step1 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step2 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step3 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step4 />
              </div>

              <div className='d-flex flex-stack pt-15'>
                <div className='mr-2'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                  >
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr063.svg'
                      className='svg-icon-4 me-1'
                    />
                    Back
                  </button>
                </div>

                <div>
                  <button type='submit' className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                      {!isSubmitButton && 'Continue'}
                      {isSubmitButton && 'Submit'}
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </div>
  )
}

export {Horizontal}
