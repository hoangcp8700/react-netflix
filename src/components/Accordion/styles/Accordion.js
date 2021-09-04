import { makeStyles } from '@material-ui/core/styles'

export const AccordionStyles = makeStyles({
  root: {
    maxWidth: 1100,
    borderBottom: '.5rem solid #222',
    padding: '3rem 5% 6rem',
    margin: 'auto',
    '@media (max-width: 600px)': {
      padding: '3rem 5% 4rem',
    },
  },
  title: {
    fontSize: 'var(--fontSize-title-pc)',
    textAlign: 'center',
    color: '#fff',
    transition: '0.2s',
    '@media (max-width: 900px)': {
      fontSize: 'var(--fontSize-title-mobile)',
    },
  },
  Accordion: {
    background: '#303030',
    color: '#fff',
    maxWidth: 670,
    margin: 'auto!important',
    padding: '.5rem 0',
    '& .MuiButtonBase-root': {
      color: '#fff',
    },
  },
  listAccordion: {
    marginBottom: '3rem',
  },
  header: {
    fontSize: 'var(--fontSize-subTitle-pc)',
    '@media (max-width: 900px)': {
      fontSize: 'var(--fontSize-subTitle-mobile)',
    },
  },
  body: {
    fontSize: 'var(--fontSize-text-pc)',
    '@media (max-width: 900px)': {
      fontSize: 'var(--fontSize-text-mobile)',
    },
  },
})
