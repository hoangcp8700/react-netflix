import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import FaqsData from 'app/data/faqs'

// styles custom
import { AccordionStyles } from 'components/Accordion/styles/Accordion'

// components
import { FormAlone } from 'components'

const AccordionContainer = () => {
  const classes = AccordionStyles()

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = id => (e, isExpanded) => {
    setExpanded(isExpanded ? id : false)
  }
  return (
    <div className={clsx('Accordion_Container', classes.root)}>
      <h1 className={classes.title}>Frequently Asked Questions</h1>
      <div className={classes.listAccordion}>
        {FaqsData.map((faq, ind) => (
          <Accordion
            key={`${faq.id}`}
            className={classes.Accordion}
            defaultExpanded={ind === 0}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
            >
              <Typography className={classes.header}>{faq.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.body}>{faq.body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <FormAlone />
    </div>
  )
}

export default AccordionContainer
