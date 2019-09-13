export const validatePhoneNumber = phone => /^380(\d{9})$/.test(phone)

export const validateName = name =>
  /^[А-Яа-яЇїІіЄє\s]+$/.test(name) && name.replace(/\s/g, "").length > 1

export const transformPhoneAfterMask = str => str.replace(/[-+()\s]/g, "")
