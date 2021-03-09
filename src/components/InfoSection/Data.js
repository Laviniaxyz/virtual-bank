import carImage from '../../images/svg-1.svg'
import savingsImage from '../../images/svg-2.svg'
import cashImage from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get started',
  imgStart: false,
  img: carImage,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited access',
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn more',
  imgStart: true,
  img: savingsImage,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
  dark: false
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Create a free account',
  headline: 'Start saving money today',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Sign up',
  imgStart: false,
  img: cashImage,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
}