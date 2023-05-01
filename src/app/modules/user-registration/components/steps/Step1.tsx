/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          You need to Fill up below details.
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Your User Name shows in site as per you enter here'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Name</label>

        <Field name='name' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='name' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>User Name</label>

        <Field name='userName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='userName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Email</label>

        <Field
          name='email'
          type='email'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='email' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Mobile Number</label>

        <Field
          name='mobileNumber'
          type='number'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='mobileNumber' />
        </div>
      </div>
    </div>
  )
}

export {Step1}
