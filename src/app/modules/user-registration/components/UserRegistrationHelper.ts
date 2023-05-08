import * as Yup from 'yup'

export interface IRegistration {
  name: string
  userName: string
  email: string
  mobileNumber: number
  nameAsPerBank: string
  bankName: string
  branchName: string
  accountNumber: number
  ifscCode: string
  sscInstituteName: string
  sscPercentage: number
  sscInstituteType: string
  hscInstituteName: string
  hscPercentage: number
  hscInstituteType: string
}

const UserRegistrationSchemas = [
  Yup.object({
    name: Yup.string().required().label('Name'),
    userName: Yup.string().required().label('User Name'),
    email: Yup.string().required().label('Email'),
    mobileNumber: Yup.string().required().label('Mobile Number'),
  }),
  Yup.object({
    nameAsPerBank: Yup.string().required().label('Name as per Bank'),
    bankName: Yup.string().required().label('Bank Name'),
    branchName: Yup.string().required().label('Branch Name'),
    accountNumber: Yup.string().required().label('Account Number'),
    ifscCode: Yup.string().required().label('IFSC code'),
  }),
  Yup.object({
    sscInstituteName: Yup.string().required().label('Institute Name'),
    sscPercentage: Yup.string().required().label('Percentage'),
    sscInstituteType: Yup.string().required().notOneOf(
      ["Select Institute Type"],
      "Please select an institute type"),
    hscInstituteName: Yup.string().required().label('Institute Name'),
    hscPercentage: Yup.string().required().label('Percentage'),
    hscInstituteType: Yup.string().required().notOneOf(
      ["Select Institute Type"],
      "Please select an institute type"),
  
  })
]

const inits: IRegistration = {
  name: 'Camden Lowe',
  userName: 'camden_1018',
  email: 'camden7@gmail.com',
  mobileNumber: 65165651651,
  nameAsPerBank: 'Camden Lowe',
  bankName: 'Bank of Baroda',
  branchName: 'Ahemdabad',
  accountNumber: 987987987897987,
  ifscCode: 'BARB0123',
  sscInstituteName: 'Sarvodya High School',
  sscPercentage: 80.66,
  sscInstituteType: '1',
  hscInstituteName: 'Sarvodaya High School',
  hscPercentage: 67.23,
  hscInstituteType: '2',
}

export {UserRegistrationSchemas, inits}
