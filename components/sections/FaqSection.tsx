'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const faqs = [
  {
    question: '¿Cuánto cuesta un sitio web o sistema?',
    answer:
      'Depende del alcance del proyecto. Cada caso es distinto, por eso la cotización es siempre personalizada y sin costo. Lo importante es que siempre recibirás una propuesta detallada antes de comprometerte con algo.',
  },
  {
    question: '¿Cuánto tiempo demora el desarrollo?',
    answer:
      'Un sitio web simple puede estar listo en 1–2 semanas. Una tienda online o sistema más complejo entre 4 y 8 semanas. Te doy una estimación real desde el primer día, sin prometer plazos imposibles.',
  },
  {
    question: '¿Puedo pagar en cuotas?',
    answer:
      'Sí. Trabajamos con un pago inicial del 50% para comenzar y el resto al entregar el proyecto. Para proyectos más grandes podemos acordar etapas de pago según el avance.',
  },
  {
    question: '¿Qué pasa si necesito cambios después de entregar?',
    answer:
      'El proyecto incluye una ronda de ajustes sin costo adicional. Luego podemos acordar un plan de mantención mensual o cotizar los cambios puntuales que necesites.',
  },
  {
    question: '¿Trabajo con clientes fuera de Chile?',
    answer:
      'Sí, trabajo de forma 100% remota. He colaborado con clientes en distintas ciudades y países sin ningún problema. La comunicación es fluida por videollamada, WhatsApp o email.',
  },
  {
    question: '¿Necesito saber de tecnología para trabajar contigo?',
    answer:
      'Para nada. Me encargo de traducir tus necesidades de negocio en soluciones técnicas. Solo necesitas saber qué problema quieres resolver, el resto lo manejo yo.',
  },
]

export default function FaqSection() {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#0A0A0F',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground orbs={[
        { top: '-20%', left: '20%', size: 400, color: 'rgba(0,229,255,0.1)', duration: 13 },
        { bottom: '-15%', right: '15%', size: 350, color: 'rgba(41,121,255,0.12)', duration: 9, delay: 5 },
      ]} gridOpacity={0.04} />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
          >
            Preguntas frecuentes
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            ¿Tienes dudas?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Las preguntas que me hacen siempre. Si la tuya no está acá, escríbeme.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor:
                  expanded === `panel${index}`
                    ? 'rgba(41, 121, 255, 0.4)'
                    : 'rgba(41, 121, 255, 0.1)',
                borderRadius: '12px !important',
                mb: 1.5,
                '&:before': { display: 'none' },
                transition: 'border-color 0.2s ease',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: expanded === `panel${index}` ? 'primary.main' : 'text.secondary',
                      transition: 'color 0.2s',
                    }}
                  />
                }
                sx={{ px: 3, py: 1 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: expanded === `panel${index}` ? 'primary.main' : 'text.primary',
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            ¿No encontraste lo que buscabas?
          </Typography>
          <Button
            variant="contained"
            href="#contacto"
            sx={{ boxShadow: '0 0 20px rgba(41, 121, 255, 0.3)' }}
          >
            Pregúntame directamente
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
