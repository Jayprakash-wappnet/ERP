import React, {FC} from 'react'
import {KTSVG} from '../../../../../helpers'
import {Field, ErrorMessage} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Bank Details</h2>

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
        <label className='form-label required'>Name as per Bank</label>

        <Field
          name='nameAsPerBank'
          type='text'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='nameAsPerBank' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Bank Name</label>

        <Field
          name='bankName'
          type='text'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='bankName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Branch Name</label>

        <Field
          name='branchName'
          type='text'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='branchName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Account number</label>

        <Field
          name='accountNumber'
          type='text'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountNumber' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>IFSC code</label>

        <Field
          name='ifscCode'
          type='text'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='ifscCode' />
        </div>
      </div>
    </div>
  )
}

export {Step2}
