export const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })

export const classNames = (...classes) => classes.filter(Boolean).join(' ')
