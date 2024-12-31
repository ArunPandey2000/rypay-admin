const aquaBlue = 'btn-aqua-blue'

export const buttonTypePropertyMapper = {
  'primary-blue': {
    showLoader: false,
    buttonClasses: 'btn-primary-blue'
  },
  'primary-white': {
    showLoader: false,
    buttonClasses: 'btn-primary-white'
  },
  'secondary-white': {
    showLoader: false,
    buttonClasses: 'btn-secondary-white'
  },
  'secondary-blue': {
    showLoader: false,
    buttonClasses: 'btn-secondary-blue'
  },
  'failed': {
    showLoader: false,
    buttonClasses: aquaBlue
  },
  'pending': {
    showLoader: true,
    buttonClasses: aquaBlue
  }
}

export type buttonTypes = 'primary-blue' | 'primary-white' | 'secondary-white' | 'secondary-blue' | 'failed' | 'pending'
export const buttonTypesList = ['btn-primary-blue', 'btn-primary-white', 'btn-secondary-white', 'btn-secondary-blue', aquaBlue]
