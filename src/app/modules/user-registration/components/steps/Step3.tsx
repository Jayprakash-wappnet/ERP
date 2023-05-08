import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Academic Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>
      <div className='pb-10 pb-lg-12'>
        <h4 className='fw-bolder text-dark'>SSC Details</h4>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Institute Name</label>

        <Field name='sscInstituteName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='sscInstituteName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Percentage(%)</span>
        </label>

        <Field name='sscPercentage' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='sscPercentage' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Institute Type</label>

        <Field
          as='select'
          name='sscInstituteType'
          className='form-select form-select-lg form-select-solid'
        >
          <option> Select Institute Type </option>
          <option value='1'>Government</option>
          <option value='1'>Self Finance</option>
          <option value='2'>Semi Government</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='sscInstituteType' />
        </div>
      </div>
      <div className='pb-10 pb-lg-12'>
        <h4 className='fw-bolder text-dark'>HSC Details</h4>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Institute Name</label>

        <Field name='hscInstituteName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='hscInstituteName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Percentage(%)</span>
        </label>

        <Field name='hscPercentage' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='hscPercentage' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Institute Type</label>

        <Field
          as='select'
          name='hscInstituteType'
          className='form-select form-select-lg form-select-solid'
        >
          <option> Select Institute Type </option>
          <option value='1'>Government</option>
          <option value='1'>Self Finance</option>
          <option value='2'>Semi Government</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='hscInstituteType' />
        </div>
      </div>
    </div>
  )
}

export {Step3}
