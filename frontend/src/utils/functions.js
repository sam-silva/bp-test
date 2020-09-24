
export const isNull = (it) => (it === undefined || it === null)

export const isNotNull = (it) => !isNull(it)
const isBlank = (it) => it === ""
export const isNotBlank = (it) => !isBlank(it) 